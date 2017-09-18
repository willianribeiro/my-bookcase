import React from 'react'
import { storiesOf } from '@kadira/storybook'

import BookCard from 'components/BookCard'

const book = {
  id: 84899971,
  livro_id: 112376,
  ranking: 0,
  tipo: 2,
  favorito: 0,
  desejado: 0,
  troco: 0,
  tenho: 0,
  emprestei: 0,
  paginas: '',
  dt_resenha: '',
  paginas_lidas: 0,
  dt_leitura: '',
  meta: 0,
  spoiler: 0,
  percentual_lido: 0,
  edicao: {
    id: 124846,
    livro_id: 112376,
    titulo: 'Como Ler Livros',
    nome_portugues: 'Como Ler Livros',
    subtitulo: 'O Guia Cl\u00e1ssico para a Leitura Inteligente',
    subtitulo_portugues: 'O Guia Cl\u00e1ssico para a Leitura Inteligente',
    idioma: '',
    mes: '',
    ano: 2010,
    volume: '',
    serie: '',
    autor: 'Mortimer J. Adler, Charles Van Doren',
    isbn: 0,
    paginas: 432,
    edicao: 0,
    editora: '\u00c9 Realiza\u00e7\u00f5es',
    sinopse: '',
    capitulo_url: '',
    capa_grande: 'https://cache.skoob.com.br/local/images//Snrzf1OUEza9iilFIRgIZ7emkHQ=/300x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/112376/COMO_LER_LIVROS__1282093044B.jpg',
    capa_media: 'https://cache.skoob.com.br/local/images//32mvg0OAYLEt3MXni4eNsMuHzXE=/200x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/112376/COMO_LER_LIVROS__1282093044B.jpg',
    capa_pequena: 'https://cache.skoob.com.br/local/images//ju-ZgNQ4WfxihHE7nTAngS7j6JM=/100x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/112376/COMO_LER_LIVROS__1282093044B.jpg',
    capa_mini: 'https://cache.skoob.com.br/local/images//nGs3V2VS7IkiWSRiT9zIpQjYT7s=/70x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/112376/COMO_LER_LIVROS__1282093044B.jpg',
    capa_micro: 'https://cache.skoob.com.br/local/images//nGs3V2VS7IkiWSRiT9zIpQjYT7s=/70x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/112376/COMO_LER_LIVROS__1282093044B.jpg',
    capa_nano: 'https://cache.skoob.com.br/local/images//Cgmym6bony11470MS2CkUNq3Prw=/40x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/112376/COMO_LER_LIVROS__1282093044B.jpg',
    img_url: 'https://cache.skoob.com.br/local/images//ju-ZgNQ4WfxihHE7nTAngS7j6JM=/100x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/112376/COMO_LER_LIVROS__1282093044B.jpg',
    url: '/como-ler-livros-112376ed124846.html',
    preco_min: 0,
    preco_max: 0,
    preco_off: 0
  }
}

storiesOf('BookCard', module)
  .add('demo', () => (
    <BookCard
      title={book.edicao.titulo}
      author={book.edicao.autor}
      img={book.edicao.capa_media}
      key={book.id}
    />
  ))
