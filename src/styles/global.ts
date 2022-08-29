import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --shape: #FFFFFF;
        --background:  #CCCCCC;
        --text: #000000;
        --border: #999999;
        --input: #777777;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        color: ${(props) => props.theme.colors.text};
		-webkit-font-smoothing: antialiased;
        background: ${(props) => props.theme.colors.background};
    }
    body, input, textarea, button, p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
    button {
        transform: filter 0.2s;
		&:hover{
			filter:brightness(0.9);
		}
    }
    input, button{
        cursor: pointer;
    }
   
    p {
        font-size: 1rem;
        text-align: justify;
    }   
    @media (max-width: 768px) {
   html {
    font-size: 87,5%;
   }
  }
`;
