const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const NotesList = require('./NotesList')

const render = () => {
  const props = store.getState()
  ReactDOM.render(
    <div className='app'>
      <div className='ui inverted segment'>
        <NotesList/>
      </div>
    </div>,
    document.querySelector('#app')
  )
}

store.subscribe(render)
render()

setInterval(() => {
  store.dispatch({
    type: 'ADD_NOTE',
    title: 'Note 2',
    text: "this is the second note"
  })
}, 3000)
