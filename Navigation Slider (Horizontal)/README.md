### Navigation Slider Bar (Horizontal)

>#### What is this?

This is a slider bar for horizontal navigation lists. It's a small bottom-border bar that slides around <br/> when you're hovering on list elements, and sets the bar using an active class.

I built this as part of an endeavor for exercising JS problem solving, and also being unable to find something on the web that did something similar. I'm positive it exists - I just don't know what the semantic word is for something like this. 

>#### Requirements

jQuery v3.3.1 or higher. 

>#### Usage

The following is a basic idea of how to get things rolling. I recommend checking out the demo first and looking at the code for a better idea of how it all flows.

**HTML Structure**
```
<nav>
  <div id="title">
    <h4>You Don't Know JS</4>
  </div>
  <ul id="nav-list">
    <li>
      <a href="/">Up & Going</a>
    </li>
    <li>
      <a href="/">Scopes & Closures</a>
    </li>
    <li>
      <a href="/">This & Object Prototypes</a>
    </li>
    <li>
      <a href="/">Types & Grammars</a>
    </li>
    <li>
      <a href="/">Async & Performance</a>
    </li>
    <li>
      <a href="/">ES6 & Beyond</a>
    </li>
  </ul>
  <div class="slider"></div>
</nav>
```
**CSS**
```
nav {
  display: flex;
  background: #000;
  height: 40px;
}

nav ul {
  position: relative;
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  right: 0;
  padding: 0;
  margin: 0;
  height: inherit;
  white-space: nowrap;
}

nav ul li {
  display: flex;
  align-items: center;
  height: inherit;
}

nav ul li a {
  display: flex;
  align-items: center;
  height: inherit;
  padding: 0 10px;
  color: #fff;
  letter-spacing: 1.2px;
  text-decoration: none;
  font-size: 12px;
}

div.slider {
  position: absolute;
  height: 2.5px;
  background: #fff;
  will-change: width;
  pointer-events: none;
}
```
**Javascript Initialization**
```
bSlider("#nav-list");
```

>#### Demo

https://jsfiddle.net/cmatian/cwtsm482/14/

>#### License

Do whatever.

