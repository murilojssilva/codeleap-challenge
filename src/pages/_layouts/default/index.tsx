import { Outlet } from "react-router-dom";

import { DefaultLayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Outlet />
    </DefaultLayoutContainer>
  );
}
