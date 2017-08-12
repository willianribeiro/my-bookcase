import axios from 'axios'

const proxy = 'https://cors-anywhere.herokuapp.com/'
const wantRead = `${proxy}https://www.skoob.com.br/v1/bookcase/books/4355417/shelf_id:0/page:1/limit:36/`
const alreadyRead = `${proxy}https://www.skoob.com.br/v1/bookcase/books/4355417/shelf_id:1/page:1/limit:36/`
const reading = `${proxy}https://www.skoob.com.br/v1/bookcase/books/4355417/shelf_id:2/page:1/limit:36/`

const api = {
  fetchWantRead: () => axios.get(wantRead),
  fetchAlreadyRead: () => axios.get(alreadyRead),
  fetchReading: () => axios.get(reading),
  fetchAll: () => {
    return axios.all([
      axios.get(wantRead),
      axios.get(alreadyRead),
      axios.get(reading)
    ])
  }
}

export default api
