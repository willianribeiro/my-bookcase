import axios from 'axios'

const wantRead = '/mock_data/books_want_to_read.json'
const alreadyRead = '/mock_data/books_already_read.json'
const reading = '/mock_data/books_reading.json'

const api = {
  fetchWantRead: (page) => axios.get(wantRead),
  fetchAlreadyRead: (page) => axios.get(alreadyRead),
  fetchReading: (page) => axios.get(reading),
}

export default api
