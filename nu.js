nu=(name, attribs, append)=>{
	var node=document.createElement(name)

	for (var attrib in attribs) {
		node[attrib]=attribs[attrib]
	}

	if (append) {
		append.appendChild(node)
	}
	else {
		return node
	}
}