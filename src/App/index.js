import React, { Component } from 'react'
import notes from 'data/notes'
import './styles.css'

class String extends Component {
  static defaultProps = {
    frets: 22
  }

  constructor(props) {
    const { tuning } = props

    super(props)

    this.note = notes.find(note => note.id === tuning)
    this.noteIndex = notes.indexOf(this.note)
  }

  isNoteSelected = note => {
    const { selectedNote } = this.props

    return selectedNote && note.id === selectedNote.id
  }

  render() {
    const { frets, onNoteClick } = this.props

    const stringNotes = notes.slice(this.noteIndex, this.noteIndex + frets)

    return (
      <div className="string">
        {stringNotes.map((note, index) => (
          <div
            className={this.isNoteSelected(note) ? 'selected' : null}
            onClick={() => onNoteClick(note)}
            key={note.id}>
            {index} {note.id}
          </div>
        ))}
      </div>
    )
  }
}

class App extends Component {
  state = {
    selectedNote: null
  }

  handleGuitarNoteClick = note => {
    console.log('handleGuitarNoteClick')
    this.setSelectedNote(note)
  }

  handlePianoNoteClick = note => {
    this.setSelectedNote(note)
  }

  isNoteSelected = note => {
    const { selectedNote } = this.state

    return selectedNote && note.id === selectedNote.id
  }

  setSelectedNote = note => {
    this.setState({
      selectedNote: note
    })
  }

  render() {
    const { selectedNote } = this.state

    return (
      <main className="main">
        <div className="piano">
          <table>
            <tbody>
              {notes.map(note => (
                <tr
                  className={this.isNoteSelected(note) ? 'selected' : null}
                  onClick={() => this.handlePianoNoteClick(note)}
                  key={note.position}>
                  <td>{note.position}</td>
                  <td>{note.note}</td>
                  <td>{note.id}</td>
                  <td>{note.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="guitar">
          <String
            onNoteClick={this.handleGuitarNoteClick}
            selectedNote={selectedNote}
            tuning="E2"
          />
          <String
            onNoteClick={this.handleGuitarNoteClick}
            selectedNote={selectedNote}
            tuning="A2"
          />
          <String
            onNoteClick={this.handleGuitarNoteClick}
            selectedNote={selectedNote}
            tuning="D3"
          />
          <String
            onNoteClick={this.handleGuitarNoteClick}
            selectedNote={selectedNote}
            tuning="G3"
          />
          <String
            onNoteClick={this.handleGuitarNoteClick}
            selectedNote={selectedNote}
            tuning="B3"
          />
          <String
            onNoteClick={this.handleGuitarNoteClick}
            selectedNote={selectedNote}
            tuning="E4"
          />
        </div>
      </main>
    )
  }
}

export default App
