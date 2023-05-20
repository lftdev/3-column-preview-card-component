const columns = document.querySelectorAll(".column")
let activeColumn = 0
columns.forEach((column, index) =>
{
    column.addEventListener("click", function()
    {
        switchColumn(index)
    })
})

function switchColumn(index)
{
    columns[activeColumn].classList.remove("active")
    columns[index].classList.add("active")
    activeColumn = index
}