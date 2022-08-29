import { FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SignUpContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleChangeUsername(e: FormEvent) {
    e.preventDefault();
    navigate("home");
    console.log(username);
  }
  return (
    <SignUpContainer>
      <h1>Welcome to CodeLeap network!</h1>
      <p>Please enter your username</p>
      <form onSubmit={handleChangeUsername}>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="John doe"
          required
        />
        <Button text="ENTER" />
      </form>
    </SignUpContainer>
  );
}
