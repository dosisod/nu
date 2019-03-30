# nu
Create HTML elements in JS more seamlessly

nu allows for more intuitive creation of HTML elements, increasing readability and decreasing redundancy:

```javascript
//With nu

nu("p", {
	"innerText": "Hello World"
}, document.body)

//Without nu

var node=document.createElement("p")
node.innerText="Hello World"
document.body.appendChild(node)
```

# Syntax

Basic syntaxing is as follows:

```javascript
nu("element-type", { //type of object to create
	"property": "value", //properties you want to set
	"another": "pair"
}, html) //object to append to (optional)

//here, html can be an html element, string for id
//if html is an array, nu will chain append:

nu("span", {
	"innerText": "Hello"
}, [
	nu("div", {"id":"container"}), //append span to nu element
	"tester", //append nu element to document.getElementById("tester")
	document.body //append "tester" to document.body
])
```

You can even do embedded function:

```javascript
nu("span", {
	"onclick": ()=>alert("clicked!")
}, document.body)
```

# Installing

Copy and use either the `nu.js` or `nu.min.js` file as needed

Make sure to include the `LICENSE` file when copying