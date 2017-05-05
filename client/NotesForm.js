const React = require('react')
const store = require('./store')

function NotesForm(props) {
  const { text } = props
  const handleChange = event => {
    store.dispatch({
      type: 'INPUT_CHANGED',
      value: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    store.dispatch({
      type: 'NOTE_CREATED',
      text: text
    })
  }
  return (
    <form className='ui form' onSubmit={ handleSubmit }>
      <div className="field">
        <input
          type="text"
          placeholder='Write your note here!'
          value={ text }
          onChange={ handleChange } />
      </div>
      <button
        type='submit'
        className='ui right teal submit button'>Submit</button>
    </form>
  )
}

module.exports = NotesForm
