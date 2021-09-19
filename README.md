# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [To Know Further](#to-know-further)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


## My Process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles


### To Know Further

- When I was using a pseudo after element with absolute positioning to display the error messages, it was being displayed only for the last box and not for the other boxes but it was working fine with static positioning. I don't understand why this happens? Got it. It was happening because the messages were being hidden inside the next input box.
- When I added the property of `display: flex` to the wrapper div of the input box which is a part of the 'Content' component, the size of the wrapper div seemed to decrease a bit. Upon further investigation I found that it was not due to any change in padding or margin or border but it was because of the change in the display property of the inner 'input' box somehow from `display: inline-block` to `display: block`. So two point to take from here is that 1) a flex container changes the display property of 'input' from inline-block to block and 2) that somehow in case of inline-block 'input' component there is some extra space on top and bottom which is not accounted for in either of padding, border or margin. 

## Author

- Frontend Mentor - [@geeky-amat](https://www.frontendmentor.io/profile/geeky-amat)
- Twitter - [@GeekyAmat](https://www.twitter.com/GeekyAmat)