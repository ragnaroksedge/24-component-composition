import React from 'react';
import uuid from 'uuid/v1';

import NoteList from '../note-list';
import NoteCreateForm from '../note-create-form';

class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: true
    }

    this.noteCreate = this.noteCreate.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
  }

  noteCreate(note) {
    note.id = uuid();
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.concat([note])
    }));
  }

  noteRemove(note) {
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      })
    }));
  }

  noteUpdate(note) {
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id === note.id ? note : item;
      })
    }));
  }

  render() {
    let {app} = this.props;

    return (
      <section className='note-container'>
        <div>
          <p></p>
        </div>
      </section>
    )
  }
}


export default NoteContainer;
