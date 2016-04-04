const DATA = require('./people-mock.js')
const LATENCY = 50

export function getAllPeople (cb) {
  setTimeout(() => {
    cb(DATA)
  }, LATENCY)
}

export function getPerson (id, cb) {
  setTimeout(() => {
    cb(DATA[--id])
  }, LATENCY)
}
