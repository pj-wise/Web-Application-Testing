import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";

test("App renders without crashing", () => {
  const container = rtl.render(<App />);
  console.log(container.debug());
});
