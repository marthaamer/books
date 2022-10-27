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

    addBookToLocalStorage(title, author, isbn)

    e.preventDefault()
}

localStorage.clear();
function deleteBook(id) {
    if (confirm('Are you sure you want to delete this item?')) {
        document.getElementById(id).parentElement.remove()
    }
}

function addBookToLocalStorage(title, author, isbn) {
    let books
    if (localStorage.getItem('books') === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }

    let book = [title, author, isbn]

    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))

    console.log(localStorage)
}

