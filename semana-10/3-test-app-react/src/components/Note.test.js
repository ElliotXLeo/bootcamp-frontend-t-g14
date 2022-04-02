import { prettyDOM, render } from "@testing-library/react";
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

test('Display title and Make not important', () => {
  const note = {
    content: 'This is a test',
    important: true
  };

  const component = render(<Note
    note={note}
  />);

  component.getByText(note.content);
  component.getByText('Make not important');
  // expect(component.container).toHaveTextContent(note.content);

  const liElement = component.container.querySelector('li');
  console.log(prettyDOM(liElement));
});