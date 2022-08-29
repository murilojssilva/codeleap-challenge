import { Outlet } from "react-router-dom";
import { Header } from "../../../components/Header";

import { ItemLayoutContainer } from "./styles";

export function ItemLayout() {
  return (
    <ItemLayoutContainer>
      <Header />
      <Outlet />
    </ItemLayoutContainer>
  );
}
