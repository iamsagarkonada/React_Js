
const reactElement = {
    type:'a',
    props:{
        href:'https://fb.com',
        target:'_blank'
    },
    children: 'Click Me'
}

function customRender(reactElement,mainContainer){
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(domElement)
}

const mainContainer = document.getElementById("root")
customRender(reactElement,mainContainer)