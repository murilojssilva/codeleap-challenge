import codeleapLogo from "../../assets/codeleap.svg";
import { LoadingContainer } from "./styles";

export function Loading() {
  return (
    <LoadingContainer>
      <img src={codeleapLogo} alt="CodeLeap Logo" />
    </LoadingContainer>
  );
}
