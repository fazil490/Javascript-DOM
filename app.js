// DOCUMENT OBJECTS
// ---------------------------------------
// console.dir(document);
// console.log(document);
// console.log(document.all);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.title);
// document.title="Item List";
// console.log(document.title);
// console.log(document.all[4]);
// console.log(document.all[9]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.body);
// console.log(document.header);
// console.log(document.images);


// GETELEMEMTSBYID
// -----------------------------------------
// console.log(document.getElementById('header1'))
// var headerTitle = document.getElementById('header1');
// var header = document.getElementById('mainheader');
// console.log(headerTitle);
// headerTitle.textContent = "Item Lister 1";
// headerTitle.innerText = "Item Lister 2"
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Item Lister 4</h3s>";


// GETELEMENTSBYCLASSNAME
// -----------------------------------------
// var items = document.getElementsByClassName('list-items');
// console.log(items);
// console.log(items[3])
// items[3].textContent="Hello";
// items[3].style.border = "2px solid #f4f4f4";
// items[3].style.padding = "13px";
// items[3].style.backgroundColor = "yellow"

// // ERROR
// // items.style.backgroundColor = "yellow"

// for(var i=0; i<items.length; i++) {
//     items[i].style.padding = "13px";
//     items[i].style.backgroundColor = "yellow";
//     items[i].style.border = "2px solid #f4f4f4";
//     items[i].style.listStyleType = "none";
// }


// GETELEMENTSBYTAGNAME
// -----------------------------------------
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[3])
// li[3].textContent="Hello";
// li[3].style.border = "2px solid #f4f4f4";
// li[3].style.padding = "13px";
// li[3].style.backgroundColor = "yellow"

// ERROR
// li.style.backgroundColor = "yellow"

// for(var i=0; i<li.length; i++) {
//     li[i].style.padding = "13px";
//     li[i].style.backgroundColor = "yellow";
//     li[i].style.border = "2px solid #f4f4f4";
//     li[i].style.listStyleType = "none";
// }



// QUERY SELECTOR
// -----------------------------------------
// var header = document.querySelector('#mainheader');
// header.style.borderBottom = "4px solid #000";

// var input = document.querySelector("input");
// input.value = "Item name";

// var secInput = document.querySelector('input[type="submit"]');
// secInput.value = "Add";

// var item = document.querySelector(".list-items");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-items:last-child");
// lastItem.style.color = "blue";

// var secItem = document.querySelector(".list-items:nth-child(2)");
// secItem.style.color = "cyan";

// var items = document.querySelectorAll('.list-items')
// for(var i=0; i<items.length; i++) {
//     items[i].style.color = "#000";
//     items[i].style.listStyleType = "none";
// }

// var odd = document.querySelectorAll('.list-items:nth-child(odd)')
// var even = document.querySelectorAll('.list-items:nth-child(even)')
// for(var i=0; i<items.length; i++) {
//     odd[i].style.padding = "13px";
//     odd[i].style.backgroundColor = "#f4f4f4";
//     even[i].style.padding = "13px";
//     even[i].style.backgroundColor = "#ccc";
// }


// ParentNode
// -----------------------------------------

// var itemsList = document.querySelector('ul')
// console.log(itemsList.parentNode)
// itemsList.parentNode.style.backgroundColor = "#f4f4f4"

// ParentElement
// -----------------------------------------

// var itemsList = document.querySelector('ul')
// console.log(itemsList.parentElement)
// itemsList.parentNode.style.backgroundColor = "#f4f4f4"


// childNode
// console.log(itemsList.childNodes);

// children
// console.log(itemsList.children)
// console.log(itemsList.children[2])
// itemsList.children[2].style.backgroundColor = "yellow";

// firstChild
// console.log(itemsList.firstChild)

// firstElementChild
// console.log(itemsList.firstElementChild)
// itemsList.firstElementChild.textContent = "Hello 1 ";

// lastChild
// console.log(itemsList.lastChild)

// lastElementChild
// console.log(itemsList.lastElementChild)
// itemsList.lastElementChild.textContent = "Hello 4 ";


// nextSibling
// console.log(itemsList.nextSibling)

// nextElementSibling
// console.log(itemsList.nextElementSibling)

// previousSibling
// console.log(itemsList.previousSibling)

// previousElementSibling
// console.log(itemsList.previousElementSibling)
// itemsList.previousElementSibling.style.color = "green"


// CREATE AN ELEMENT

// CREATE A DIV 
// var newDiv = document.createElement('div')

// Add class
// newDiv.className = "hello"

// Add id
// newDiv.id = "hello2"

// Add attribute
// newDiv.setAttribute('title', 'hello title')

// Create a text node
// var newDivText = document.createTextNode('Hello world')
// newDiv.appendChild(newDivText)

// var container = document.querySelector('header .main')
// var h1 = document.querySelector('header h1')

// newDiv.style.color = "red"
// newDiv.style.fontSize = "23px"


// container.insertBefore(newDiv, h1)

// console.log(newDiv)             


// EVENTS
// -----------------------------------------

// var button = document.querySelector('.btn').addEventListener('click', buttonClick)

// function buttonClick(f){
    // console.log('Button clicked')
    // document.querySelector('#mainheader').textContent = "Hi there"
    // document.querySelector('.container').style.backgroundColor = "#f4f4f4"

    // var output = document.querySelector('#output')
    // output.innerHTML = '<h2>Item added</h2>' 
    
    // console.log(f.type)
    // console.log(f.clientX)
    // console.log(f.clientY)

    // console.log(f.offsetX)
    // console.log(f.offsetY)

    // console.log(f.altKey)
    // console.log(f.ctrlKey)
    // console.log(f.shiftKey)

// }

// var button = document.querySelector('.btn')
// var box = document.querySelector('.box')
// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mouseup', runEvent)
// button.addEventListener('mousedown', runEvent)

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)
// box.addEventListener('mousemove', runEvent)


// var inputText = document.querySelector('input[type="text"]')
// var select = document.querySelector('select')
// var form = document.querySelector('form')

// inputText.addEventListener('keydown', runEvent)
// inputText.addEventListener('keyup', runEvent)
// inputText.addEventListener('keypress', runEvent)

// inputText.addEventListener('focus', runEvent)
// inputText.addEventListener('blur', runEvent)

// inputText.addEventListener('cut', runEvent)
// inputText.addEventListener('paste', runEvent)

// inputText.addEventListener('input', runEvent)


// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)

// form.addEventListener('submit', runEvent)


// function runEvent(e) {
//     e.preventDefault();
//     console.log('Event type: ' + e.type)
//     console.log(e.target.value)
//     document.querySelector('#output').innerHTML = '<h2>'+e.target.value+'</h2>'
    
    // output.innerHTML = '<h2>MouseX: '+e.offsetX+'</h2> <h2>MouseY: '+e.offsetY+'</h2>'

    // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 13)"
    // document.body.style.color = "#ffffff" 
// }