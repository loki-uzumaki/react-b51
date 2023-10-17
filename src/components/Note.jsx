import React from 'react';

function Note({ note }) {
    return (
        <li>{note.content}{note.important && '★'}</li>
    )
}

export default Note;