import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* 2.   Basic resets */


*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
* {
  margin: 0;
  padding: 0;
  font: inherit;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

html,
body {
  min-height: 100%;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
/* Remove all underline decoration from anchor tags */
a {
  text-decoration: none;
}

/* Remove border from all buttons and center the text within */

button,
button:is(:hover, :focus-visible) {
  border: 0;
  line-height: 0;
}

/* Make images easier to work with */
img,
picture,
svg {
  max-width: 100%;
  display: inline-block;
}

/*  Utility Classes*/

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: no-wrap;
  border: 0;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Remove border from all buttons and center the text within */


/* 2.   Basic resets ends */

/****************************************************************************************************************/
/****************************************************************************************************************/
/****************************************************************************************************************/

`
export default GlobalStyle;