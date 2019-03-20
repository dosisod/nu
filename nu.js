nu=(name, attribs)=>{
	var node=document.createElement(name)

	for (var attrib in attribs) {
		node[attrib]=attribs[attrib]
	}

	return node
}