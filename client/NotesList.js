const React = require('react')

const Note = props => {
  return (
    <div className='item'>
      <div className= 'content'>
        <div className= 'header'>{ props.text }</div>
      </div>
    </div>
  )
}

function NotesList(props) {
  const { notes } = props
  return (
    <div className='ui relaxed divided list'>
      {
        notes.map((note, i) => {
          return (
            <Note key={ i } text={note.text}/>
          )
        })
      }
    </div>
  )
}

module.exports = NotesList
