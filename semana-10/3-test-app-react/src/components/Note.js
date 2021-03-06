const Note = ({ note, toggleImportance }) => {

  const textButton = note.important ? 'Make not important' : 'Make important'

  return (
    <li>
      <h2>{note.content}</h2>
      <button onClick={toggleImportance}>{textButton}</button>
    </li>
  );
}

export default Note;