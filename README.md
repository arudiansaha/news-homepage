# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshot

- [Desktop](./screenshots/desktop_1440-900.png)
- [Mobile](./screenshots/mobile_375-702.png)

### Links

- Solution URL: [Click here](https://your-solution-url.com)
- Live Site URL: [Click here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- HTML BOM and DOM

### What I learned

I've learned more about Mobile-first workflow, it's easier to implement from mobile to desktop than desktop to mobile.

Here some code of mine:

```html
<div class="sidebar--background"></div>
<div class="sidebar">
  <svg class="sidebar__close" width="32" height="31" xmlns="http://www.w3.org/2000/svg">
    <g fill="#00001A" fill-rule="evenodd">
      <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
      <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
    </g>
  </svg>
  <nav class="sidebar__links">
    <a href="#">Home</a>
    <a href="#new">New</a>
    <a href="#popular">Popular</a>
    <a href="#trending">Trending</a>
    <a href="#categories">Categories</a>
  </nav>
</div>
```
```css
.sidebar--background.active {
  display: block;
}

.sidebar.active {
  display: block;
}

.sidebar__close {
  position: absolute;
  top: 2rem;
  right: 1rem;
}

.sidebar__links {
  position: absolute;
  top: 9rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar__links a:hover {
  color: var(--soft-red);
}
```
```js
const navigationMenu = document.querySelector('.navigation__menu');
const sidebarClose = document.querySelector('.sidebar__close');
const sidebarBackground = document.querySelector('.sidebar--background');
const sidebar = document.querySelector('.sidebar');

navigationMenu.addEventListener('click', function () {
  sidebarBackground.classList.add('active');
  sidebar.classList.add('active');
});

sidebarClose.addEventListener('click', function () {
  if (sidebar.classList.contains('active')) {
    sidebarBackground.classList.remove('active');
    sidebar.classList.remove('active');
  }
});
```

### Continued development

Maybe I need improve my quality code.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US) - All you need is here :D.

## Author

- Website - [Blog](https://blog-arudiansaha.vercel.app)
- Frontend Mentor - [@arudiansaha](https://www.frontendmentor.io/profile/arudiansaha)
- Twitter - [@arudiansaha](https://www.twitter.com/arudiansaha)
- LinkedIn - [Rizky Ardiansyah](https://www.linkedin.com/in/ky-ardiansyah)

## Acknowledgments

- [MDN Web Docs](https://developer.mozilla.org/en-US)