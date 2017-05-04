const React = require('react')

const Note = props => {
  return (
    <div className='item'>
      <div className= 'content'>
        <div className= 'header'>{ props.title }</div>
        { props.text }
      </div>
    </div>
  )
}

function NotesList(props) {
  const { notes } = props
  return (
    <div className='ui inverted relaxed divided list'>
      {
        notes.map((note, i) => {
          console.log(notes)
          return (
            <Note key={ i } date={ note.title } text={ note.text}/>
          )
        })
      }
    </div>
  )
}

module.exports = NotesList
