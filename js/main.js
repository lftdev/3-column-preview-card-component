const columns = document.querySelectorAll('.column')
const column_content = document.querySelectorAll('.column .content')
let activeColumn = 0
columns.forEach((column, index) => {
    column.addEventListener('click', () => {
        columns[activeColumn].classList.remove('active')
        column_content[activeColumn].classList.remove('active')
        columns[index].classList.add('active')
        column_content[index].classList.add('active')
        activeColumn = index
    })
})
