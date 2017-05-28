import React from 'react';
import createReactClass from 'create-react-class';
import Masonry from 'react-masonry-component';
import Note from './Note.jsx';
import './NotesGrid.less';

const NotesGrid = createReactClass({
    render() {
        const mansoryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        return (
            <Masonry
                className="NotesGrid"
                options={mansoryOptions}
            >
                {
                    this.props.notes.map(note =>
                        <Note
                            key={note.id}
                            title={note.title}
                            onDelete={this.props.onNoteDelete.bind(null, note)}
                            color={note.color}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
});

export default NotesGrid;