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
        modalContainer.remove()
    })
    modalContainer.appendChild(close) // добавляем кнопку в дом-узел (модальное окно)
    document.body.appendChild(modalContainer) // добавляем модальное окно в тело документа
}

images.forEach((item, index) => {
    item.addEventListener('click', () => {
        
        createModalWindow(item.children[0].src)
        // получаю урл картинки и передаю в ф-ию createModalWindow
    })
})