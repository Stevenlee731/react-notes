const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const NotesList = require('./NotesList')
const NotesForm = require('./NotesForm')
window.store = store

const render = () => {
  const state = store.getState()
  console.log('state', state)
  ReactDOM.render(
    <div className='app'>
      <div className='top ui main text container'>
        <div className='ui stacked segment'>
          <NotesForm text={ state.noteInput }/>
        </div>
        <div className='ui stacked segment'>
          <NotesList notes={ state.notes }/>
        </div>
      </div>
    </div>,
    document.querySelector('#app')
  )
}

store.subscribe(render)
render()

fetch('/notes')
  .then(res => res.json())
  .then(notes => {
    store.dispatch({ type: 'NOTES_LOADED', notes })
  })
