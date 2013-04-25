## Cardify:

Cardify is a light-weight jQuery plugin that will create small to large card style containers for grouping HTML elements.

## Dependancies:

* jQuery
* Font-Awesome

## Options:

```
  id:             The ID to be placed on the container
  title:          The title text wrapped in an <h4>
  className:      Size: small (0px x 0px) | medium (0px x 0px) | large (0px x 0px) - Color: white | red | blue
  faIcon:         The Font-Awesome icon to use to the left of the title
  body:           The content of the card
  showClose:      true | false to show the close icon in upper right corner
  closeIcon:      The icon to be used as the close icon, default fa-icon-remove
  callback:       The callback that get's called when rendering is compolete
  attrs: []:      Custom HTML attributes to be placed on the container
  closeFunction:  The function to be called when the close button is clicked
```

## Examples:

## Usage

```
  <script src="/components/cardify/js/jquery.cardify.js"></script>
  <link rel="stylesheet" href="/components/cardify/css/jquery.cardify.css">
  
  <script>
    $(".container").appendCard({
      id: "my-card", 
      faIcon: "fa-icon-money", 
      title: "Welcome", 
      showClose: true,
      className: "large blue",
      closeFunction: function(){
        // Close code goes here
      },
      attrs: [{"custom-attr": "Welcome"}],
      body: "<div>Welcome to Cardify<div>"
    });
  </script>
```
