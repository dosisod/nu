# nu
Create HTML elements in JS more seamlessly

nu allows for more intuitive creation of HTML elements, increasing readability and decreasing redundancy.

## Creating elements with `nu`


```javascript
nu("p", {
	"innerText": "Hello World"
}, document.body)
```

## Creating elements without `nu`

```javascript
var node=document.createElement("p")
node.innerText="Hello World"
document.body.appendChild(node)
```

## Syntax

Basic syntaxing is as follows:

```javascript
var x=nu("element-type", { //type of object to create
	"property": "value", //properties you want to set
	"another": "pair"
}, object, keep)
```

`x` now holds the `nu` element.

`nu` can also be called anonymously, and elements will still be appended, but not returned.

Here, the `object` can be an html element, an id for an element, or another `nu` element:

```javascript
nu("span", {"innerText": "Hello World!"}, "id")            //append to element with id "id"
nu("span", {"innerText": "Hello World!"}, document.body})  //append to body
nu("span", {"innerText": "Hello World!"}, nu("div", {}))   //append to empty div
```

If `object` is an array, `nu` will chain append (recursivley append itself to next item in list):

```javascript
nu("span", {
	"innerText": "Hello"
}, [
	nu("div", {"id":"container"}), //append span to nu element
	"tester", //append nu element to document.getElementById("tester")
	document.body //append "tester" to document.body
], true)
```

`true` is set to return the original element before chain appending (just the `span`).

Setting this to `false` or omitting it entirely will return the element after it has been chain appended.

To create a blank HTMLElement, pass `{}` as the second parameter:

```javascript
nu("span", {}) //makes an empty span
```

When calling `nu` with only one parameter, `document.getElementById` is called instead:

```javascript
nu("insert-id")

//is equivalent to

document.getElementById("insert-id")
```

You can even use embedded functions for event listeners:

```javascript
nu("span", {
	"innerText": "Hello World",
	"onclick": (e)=>alert(e.target.innerText)
}, document.body)
```

# Installing

Copy and use the `nu.min.js` file as needed.

# Building

To compile the TypeScript, compile with using provided `tsconfig.json` file:

```
$ tsc --build tsconfig.json
```