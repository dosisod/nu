nu=(name, attribs, append)=>{
	var node=document.createElement(name) //make the element we will be modifying

	for (var attrib in attribs) {
		node[attrib]=attribs[attrib] //set property of node to each passed prop
	}

	if (typeof append=="object") { //if an html object append directly
		append.appendChild(node)
	}
	else if (typeof append=="string") { //if string assume its an id, grab that id and append
		document.getElementById(append).appendChild(node)
	}
	else {
		return node
	}
}