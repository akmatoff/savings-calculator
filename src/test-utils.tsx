import React, { ReactElement, ReactNode } from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "./redux/store";

function render(component: ReactElement) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(component, { wrapper: Wrapper });
}

export * from "@testing-library/react";

export { render };
