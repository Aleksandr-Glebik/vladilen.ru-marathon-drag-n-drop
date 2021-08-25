const item = document.querySelector('.item')

// console.log(item)

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(event) {
    // console.log('drag start', event.target)
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)

}

function dragend() {
    // console.log('drag end')
    // event.target.classList.remove('hold', 'hide')
    event.target.className = 'item'

}