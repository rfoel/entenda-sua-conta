import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Lemon from "../src/Lemon";

const fireEventKeyDown = (target, key) =>
  fireEvent.keyDown(target, {
    key
  });

test("renders and submits form without crashing", () => {
  const { getByText, container } = render(<Lemon />);
  expect(getByText("Entenda sua conta de energia")).toBeTruthy();
  fireEvent.submit(container.querySelector("form"));
  expect(getByText("Aqui está sua conta de energia")).toBeTruthy();
});

test("renders, inputs, submits form, and display correct values", () => {
  const { container } = render(<Lemon />);
  const input = container.querySelector("input");
  fireEventKeyDown(input, 1);
  expect(input).toHaveValue("R$0.01");
  fireEventKeyDown(input, 0);
  fireEventKeyDown(input, 0);
  fireEventKeyDown(input, 0);
  fireEventKeyDown(input, 0);
  expect(input).toHaveValue("R$100.00");
  fireEvent.submit(container.querySelector("form"));
  expect(container).toHaveTextContent("165 (R$92.13)");
  expect(container).toHaveTextContent("R$7.87");
  expect(container).toHaveTextContent("12% (R$11.06)");
  expect(container).toHaveTextContent("R$100.00");
});

test("display correct values with input out of range", () => {
  const { container } = render(<Lemon />);
  const input = container.querySelector("input");
  fireEventKeyDown(input, 1);
  fireEventKeyDown(input, 0);
  fireEventKeyDown(input, 0);
  fireEventKeyDown(input, 0);
  fireEventKeyDown(input, 0);
  fireEventKeyDown(input, 0);
  fireEventKeyDown(input, 0);
  fireEvent.submit(container.querySelector("form"));
  expect(container).toHaveTextContent("16,965 (R$9,452.97)");
  expect(container).toHaveTextContent("R$547.03");
  expect(container).toHaveTextContent("25% (R$2,363.24)");
  expect(container).toHaveTextContent("R$10,000.00");
});
