const container = document.querySelector('#container')
const createBtn = document.getElementById('create-btn')
let containerSize = 400
container.style.width = `${containerSize}px`
container.style.heigth = `${containerSize}px`
let sizeOfGrid = 4

const createGrid = function createGrid() {
    for (let i=0; i<sizeOfGrid**2; i++) {
        const div = document.createElement('div')
        div.style.border = 'solid 1px'
        div.style.flex = '1'
        div.style.Width = `${containerSize}/${sizeOfGrid}`
        container.appendChild(div)
    }
}
createBtn.addEventListener('click', createGrid)