import { render, screen } from "@testing-library/react";
import Home from "./Home";

beforeEach(() => {
  render(<Home />);
});

describe('Home', () => {
  it('Must reder', () => {
  });

  it('Must display a title', () => {
    expect(screen.queryByText(/home title/i)).toBeInTheDocument();
  });

  it('Must display a paragraph', () => {
    expect(screen.queryByText(/paragraph/i)).toBeInTheDocument();
  });
});