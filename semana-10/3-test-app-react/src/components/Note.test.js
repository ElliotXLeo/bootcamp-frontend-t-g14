import { render } from "@testing-library/react";
import Note from './Note';

test('Render component Note', () => {
  const note = {
    content: 'This is a test',
    important: true
  };

  render(<Note
    note={note}
  />);
});