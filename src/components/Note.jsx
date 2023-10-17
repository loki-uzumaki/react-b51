import React from 'react';

function Note({ note }) {
    return (
        <li>{note.important ? note.content + '★' : note.content}</li>
    )
}

export default Note;