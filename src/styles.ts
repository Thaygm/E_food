import { createGlobalStyle } from 'styled-components'

export const colors = {
  beige: '#FFEBD9',
  lightBeige: '#FFF8F2',
  coral: '#E66767',
  white: '#ffffff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.lightBeige};
    color: ${colors.coral};
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }

`
