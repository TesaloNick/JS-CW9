const images = document.querySelectorAll('.container > div')
// console.dir(images);
const createModalWindow = (source) => {
    const modalContainer = document.createElement('div')
    modalContainer.classList.add('modal-container')
    modalContainer.innerHTML = `
        <div class='modal-block'>
            <img src='${source}'>
        </div>
    `    // удаляем модальное окно
    const close = document.createElement('button')
    close.innerHTML = 'Close'
    close.addEventListener('click', () => {
        modalContainer.classList.remove('show')
        setTimeout(() => {
            modalContainer.remove() // удаляем дом-узел
        }, 500)    })

    modalContainer.appendChild(close) // добавляем кнопку в дом-узел (модальное окно)
    document.body.appendChild(modalContainer) // добавляем модальное окно в тело документа
    setTimeout(() => {
        modalContainer.classList.add('show') // делаем задержку 
    }, 100)
}

images.forEach((item, index) => {
    item.addEventListener('click', () => {
        
        createModalWindow(item.children[0].src)
        // получаю урл картинки и передаю в ф-ию createModalWindow
    })
})