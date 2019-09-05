import React from "react";
import App from "./App";
import Dashboard from "./components/Dashboard";
import { render, fireEvent } from "@testing-library/react";

test("App renders without crashing", () => {
  const container = render(<App />);
  console.log(container.debug());
});

test("Display component contains ball, strike, hit and foul buttons", () => {
  const { getByText } = render(<Dashboard />);
  getByText(/^ball$/i);
  getByText(/^strike$/i);
  getByText(/^hit$/i);
  getByText(/^foul$/i);
});

test("Dashboard ball button resets after 3 balls / 4 clicks", () => {
  const { getByText, getByTestId } = render(<App />);
  const ballBtn = getByTestId(/ballBtn/i);
  fireEvent.click(ballBtn);
  fireEvent.click(ballBtn);
  fireEvent.click(ballBtn);
  fireEvent.click(ballBtn);
  expect(getByText(/Balls: 0/i));
});

test("Dashboard strike button resets balls display after 3 clicks", () => {
  const { getByText, getByTestId } = render(<App />);
  const strikeBtn = getByTestId(/strikeBtn/i);
  fireEvent.click(strikeBtn);
  fireEvent.click(strikeBtn);
  fireEvent.click(strikeBtn);
  expect(getByText(/Balls: 0/i));
});
