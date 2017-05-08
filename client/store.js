const { createStore, combineReducers } = require('redux')

function notes(state = [], action) {
  switch (action.type) {
    case "NOTE_CREATED":
      return state.concat({
        text: action.text
      })
    case "NOTES_LOADED":
      return state.concat(action.notes)
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
