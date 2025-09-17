import { ReactElement } from "react";

import { render, RenderOptions } from "@testing-library/react";
import fs from "fs";

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  const view = render(ui, options);

  const style = document.createElement("style");
  style.innerHTML = fs.readFileSync("test-utils/temp.css", "utf8");
  document.head.appendChild(style);

  return view;
};

export * from "@testing-library/react";
export { customRender as render };
