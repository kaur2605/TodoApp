import App from "./App";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header has correct initial text", () => {
  const { getByText } = render(<App />);
  const text = "My TODO App";
  const element = getByText(text)
  expect(element.tagName).toBe('H2')
});
 test('Todolist component render correctly', () => {
const { getByTestId } = render(<App />);
expect(getByTestId('todolist')).toBeInTheDocument

 })