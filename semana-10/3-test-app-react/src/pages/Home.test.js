import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe('Home', () => {
  it('Must reder', () => {
    render(<Home />);
  });

  it('Must display a title', () => {
    render(<Home />);
    expect(screen.queryByText(/home title/i)).toBeInTheDocument();
  });
});