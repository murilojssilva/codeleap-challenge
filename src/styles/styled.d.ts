import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      shape: string;
      background: string;
      text: string;
      border: string;
      input: string;
    };
  }
}
