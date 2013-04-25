## Cardify:

Cardify is a light-weight jQuery plugin that will create small to large card style containers for grouping HTML elements.

## Dependancies:

* jQuery
* Font-Awesome

## Options:

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
