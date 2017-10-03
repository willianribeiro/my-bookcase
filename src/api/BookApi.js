import axios from 'axios'

const api = {
  fetchWantRead: fetchWantRead,
  fetchAlreadyRead: fetchAlreadyRead,
  fetchReading: fetchReading
}

// variables
const proxy = 'https://cors-anywhere.herokuapp.com'
const baseUrl = 'https://www.skoob.com.br/v1/bookcase/books'
const userId = 4355417
const limit = 20

// public functions
function fetchWantRead (page) {
  const shelfId = 0
  const wantRead = _mountUrl(shelfId, page)
  return axios.get(wantRead)
}

function fetchAlreadyRead (page) {
  const shelfId = 1
  const alreadyRead = _mountUrl(shelfId, page)
  return axios.get(alreadyRead)
}

function fetchReading (page) {
  const shelfId = 2
  const reading = _mountUrl(shelfId, page)
  return axios.get(reading)
}

// private functions
function _mountUrl(shelfId, page) {
  return `${proxy}/${baseUrl}/${userId}/shelf_id:${shelfId}/page:${page}/limit:${limit}/`
}

export default api
