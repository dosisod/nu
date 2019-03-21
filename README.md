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
```

You can even do embedded function:

```javascript
nu("span", {
	"onclick": ()=>alert("clicked!")
} document.body)
```

# Installing

Copy and use either the `nu.js` or `nu.min.js` file as needed

Make sure to include the `LICENSE` file when copying