# Color Content Library

functions to retrieve color information on an image

## Installation

`npm i lissa-color-content`

at the top of your file put:

```js
const colorContent = require("lissa-color-content");
```

## Usage

# set up

all functions take Uint8ClampedArray object as input,  
gotten by calling the CanvasRenderingContext2D method:
getImageData() on a selection of a canvas

```js
  const img = new Image();
  
  // scroll to bottom to see the image i used
  img.src = "./images/betta.png";
  
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.drawImage(img, 0, 0, width, height);
  const imgData = ctx.getImageData(0, 0, img.width, img.height);
```

# getPercentRGB()
returns object with the percent red, green, and blue  
making up all the pixels in the image

example:

```js
  getPercentRGB(imgData);
  // returns { r: 0.36, g: 0.4, b: 0.24 }
```  

# getAverageColor()
  returns object with average red, green, and blue values  
  of all pixels in the image  

  example:

```js
  getAverageColor(imgData);
  // returns { r: 89, g: 146, b: 89 }
```  

### example image:

![betta](https://user-images.githubusercontent.com/89868181/178844513-7d390ecb-f687-4c82-bf0b-c95580f19d4a.png)
