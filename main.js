// FETCH DATA
const proxy = 'https://cors-anywhere.herokuapp.com/';
const wantRead = `${proxy}https://www.skoob.com.br/v1/bookcase/books/4355417/shelf_id:0/page:1/limit:36/`;
const alreadyRead = `${proxy}https://www.skoob.com.br/v1/bookcase/books/4355417/shelf_id:1/page:1/limit:36/`;
const reading = `${proxy}https://www.skoob.com.br/v1/bookcase/books/4355417/shelf_id:2/page:1/limit:36/`;
const errorHandler = (data, status, error) => console.log(`error: ${error}`);

const fetchWantRead = () => {
    return $.ajax({
        type: 'GET',
        url: wantRead,
        dataType: "JSON",
    });
}

const fetchAlreadyRead = () => {
    return $.ajax({
        type: 'GET',
        url: alreadyRead,
        dataType: "JSON",
    });
}

const fetchReading = () => {
    return $.ajax({
        type: 'GET',
        url: reading,
        dataType: "JSON",
    });
}

$.when(fetchWantRead(), fetchAlreadyRead(), fetchReading())
    .done((wantRead, alreadyRead, reading) => {
        const books = {};
        books.wantRead = wantRead[0].response;
        books.alreadyRead = alreadyRead[0].response;
        books.reading = reading[0].response;
        console.log('fetched');
        renderBookshelf(books);
    }
    );


// RENDER DATA
const renderBookshelf = (books) => {
    const $bookShelf = $('#js-books');
    renderShelf(books.reading, $bookShelf);
    renderShelf(books.alreadyRead, $bookShelf);
    renderShelf(books.alreadyRead, $bookShelf);
}

const renderShelf = (books = [], $bookShelf) => {
    books.forEach((book) => {
        const cover = book.edicao.capa_media;
        const title = book.edicao.titulo;
        const subtitle = book.edicao.subtitulo;
        const author = book.edicao.autor;
        const publishingCompany = book.edicao.editora;
        const link = book.edicao.url;

        const bookTemplate = `
            <article>
                <h2>${title}</h2>
                <p>${author}</p>
                <img src="${cover}">
            </article>    
        `;

        $bookShelf.append(bookTemplate);
    });
}