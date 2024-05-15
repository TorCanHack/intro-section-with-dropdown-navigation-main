# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Intro section with dropdown navigation solution](#frontend-mentor---intro-section-with-dropdown-navigation-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [solution URL](https://github.com/TorCanHack/intro-section-with-dropdown-navigation-main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

An essential part of this challenge is building a drop down menu for mobile version of the website. To acheieve this I used a combination of `<nav>`, `<button>` and `<ul>` tags in the `<header>` element.

The `<button>` element (by adding an event listener to it) toggles the menu. I nested a harmburger logo and an X logo in the `<button>` tags. Then I control the display of the logos depending on wether the menu is collpased or expanded.

Additionally, I have `<div>` tag that holds the `<ul>`, which contains the menu list. The display property of this container is set to 'none' by default. Meaning the menu is colppased by default.

To achieive the toggle functionality, I used the following javascript code that checks display property of the `<div>` as follows: 

```` js

//accesses the menu button
const menuButton = document.querySelector('.menu-button');

//add a click event to the menue button
menuButton.addEventListener('click', function() {

    //accesses the harmburger logo
    const iconMenu = document.querySelector('.icon-menu');

    //accesses the X logo
    const iconCloseMenu = document.querySelector('.icon-close-menu');

    //accesses the div tag that holds the menu 
    const dropDownContainer = document.querySelector('.drop-down-container');

    
    //This code checks if the menu is collapsed and expands it by manipulating the display proepties of the relevant elements involved
    if ( dropDownContainer.style.display === 'none'){
        dropDownContainer.style.display = 'block';
        iconMenu.style.display = 'none'
        iconCloseMenu.style.display = 'block';
        document.body.classList.add('overlay-active'); // Add the overlay

        
    //this code checks if the menu is expanded and collapses it by toggling relevant display properties
    } else {
        dropDownContainer.style.display = 'none';
        iconMenu.style.display = 'block'
        iconCloseMenu.style.display = 'none';
        document.body.classList.remove('overlay-active'); // Remove the overlay

    }
    
})
````
Additionally, to improve the accessibility. I used Accessible Rich Internet Application (ARIA) to provide aditonal infomratio.

The Aria attributes i used are:

1. `aria-haspopup`, this attribute tells the assitive technology that there's a popup (menu) associated with the element.
2. `aria-expanded`, this attribute tells assitive technology whether the menu is collpased or expanded.

The `aria-haspopup`attribute is set to `true` and remains like that. 

The `aria-expanded` on the other hand is dynamic and is set to either `true` or `false`, depending on whether the menue is collapsed or not. 

I used the following code to toggle between `true` or `false` of `aria-expanded` attribute

````js

document.querySelectorAll('.drop-down-btn').forEach(button => {
    button.onclick = function() {
      let expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
    }
  }); 

````

The above code selects all the drop-down buttons and adds a click function to them. It then gets the current state of the `aria-expanded`. It then toggles the aria-expanded attribute. If expanded was true, it sets it to false, and vice versa.

### Continued development

Passion of mine is making the web accessible for all. I would like to continue to find methods and ways to improve accessiblity and user experince for all.



## Acknowledgments

Thank you to the Front-end Mentor Team for this project!


