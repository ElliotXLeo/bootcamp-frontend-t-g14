import { render } from "@testing-library/react";
import Home from "./Home";

describe('Home', () => {
  it('Must reder', () => {
    render(<Home />);
  });
});