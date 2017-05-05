const { createStore, combineReducers } = require('redux')

const initialState = [
  {
    text: 'This is the first note'
  },
  {
    text: 'This is the second note'
  }
]

function notes(state = initialState, action) {
  switch (action.type) {
    case "NOTE_CREATED":
      return state.concat({
        text: action.text
      })
    default:
      return state
  }
}

function noteInput(state = '', action) {
  switch (action.type) {
    case "INPUT_CHANGED":
      return action.value
    case "NOTE_CREATED":
      return ''
    default:
      return state
  }
}

const reducer = combineReducers({
  notes,
  noteInput
 })

const store = createStore(reducer)

module.exports = store
