import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    // color: ${({ theme }) => theme.text};
    transition: all .3s linear;
    font-family: 'Poppins', sans-serif;
  }
  .tagside{
    color: ${({ theme }) => theme.text};
  }
  
  .searchside{
    color: ${({ theme }) => theme.text};;
  }
  #text-msg{
    color: ${({ theme }) => theme.text};
  }

  #moon{
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
    cursor: pointer;
    // color: ${({ theme }) => theme.primary};
    transition: all .3s linear;
  }
  #moon:hover{
    transform: rotate(-90deg);
    box-shadow: 1px 2px 7px 2px rgba(0,0,0,0.42);
  }
 
  .pagBtns a{
    color: ${({ theme }) => theme.text};
  }

  #sun{
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
    cursor: pointer;
    padding: .1rem;
    color: ${({ theme }) => theme.primary};
    transition: all .3s linear;
  }
  #sun:hover{
    transform: rotate(30deg);
    box-shadow: 1px 1px 5px 1px rgba(255,255,255,0.42);
  }
`;

export const lightTheme = {
    body: '#fff',
    text: '000',
    primary: '#fff',
};
  
export const darkTheme = {
    body: '#121212',
    text: '#fff',
    primary: '#000',
};