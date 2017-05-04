const Redux = require('redux')

const initialState = [
  {
    title: 'Note 1',
    text: 'This is the first note'
  }
]

function notes(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return state.concat({
        title: action.title,
        text: action.text
      })
    default:
      return state
  }
}

const store = Redux.createStore(notes)

module.exports = store
