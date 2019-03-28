nu=(name, attribs, append)=>{
	var node=document.createElement(name) //make the element we will be modifying

	for (var attrib in attribs) {
		node[attrib]=attribs[attrib] //set property of node to each passed prop
	}

	var f=e=>{ //allows for append chaining
		var type=e.constructor.name //name of variable type
		
		if (type.substring(0, 4)=="HTML") { //if an html object append directly
			node=e.appendChild(node).parentNode
		}
		else if (type=="String") { //if string assume its an id, grab that id and append
			node=document.getElementById(e).appendChild(node).parentNode
		}
	}

	if (append) {
		var list=[]
		if (!Array.isArray(append)) list.push(append) //append to list if not a list
		else list=append //set to list if already a list
		
		list.forEach(e=>{ //append element into each other element
			f(e)
		})
	}
	else {
		return node
	}
}