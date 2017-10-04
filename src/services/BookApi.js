import axios from 'axios'

const api = {
  fetchAlreadyRead: fetchAlreadyRead,
  fetchReading: fetchReading,
  fetchWantRead: fetchWantRead
}

// variables
const proxy = 'https://cors-anywhere.herokuapp.com'
const baseUrl = 'https://www.skoob.com.br/v1/bookcase/books'
const limit = 20

// public functions
function fetchAlreadyRead (user, page) {
  const shelfId = 1
  const alreadyRead = _mountUrl(user, page, shelfId)
  return axios.get(alreadyRead)
}

function fetchReading (user, page) {
  const shelfId = 2
  const reading = _mountUrl(user, page, shelfId)
  return axios.get(reading)
}

function fetchWantRead (user, page) {
  const shelfId = 3
  const wantRead = _mountUrl(user, page, shelfId)
  return axios.get(wantRead)
}

// private functions
function _mountUrl (user, page, shelfId) {
  return `${proxy}/${baseUrl}/${user}/shelf_id:${shelfId}/page:${page}/limit:${limit}/`
}

export default api
