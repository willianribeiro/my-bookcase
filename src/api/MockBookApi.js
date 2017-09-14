import axios from 'axios'

const wantRead = '/mock_data/books_want_to_read.json'
const alreadyRead = '/mock_data/books_already_read.json'
const reading = '/mock_data/books_reading.json'

const api = {
  fetchWantRead: () => axios.get(wantRead),
  fetchAlreadyRead: () => axios.get(alreadyRead),
  fetchReading: () => axios.get(reading),
  fetchAll: () => (
    axios.all([
      axios.get(wantRead),
      axios.get(alreadyRead),
      axios.get(reading)
    ])
  )
}

export default api
