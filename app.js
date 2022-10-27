const form = document.querySelector('form')
form.addEventListener('submit', addBook)

function addBook(e) {
    let title = document.getElementById('titleInput').value
    let author = document.getElementById('authorInput').value
    let isbn = document.getElementById('isbnInput').value

    let tr = document.createElement('tr')
    tr.innerHTML = `<td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td class="text-center" style="cursor: pointer" id="${isbn}" onclick="deleteBook(this.id)">X</td>`

    let el = document.getElementById('tableBody');
    el.appendChild(tr)

    e.preventDefault()
}

