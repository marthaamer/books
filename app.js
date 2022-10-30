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
            <td class="text-center" style="cursor: pointer" id="${isbn} onclick="deleteBook(this.id)">X</td>`

    let el = document.getElementById('tableBody');
    el.appendChild(tr)

    addBookToLocalStorage(title, author, isbn)

    e.preventDefault()
}

function deleteBook(id) {
    if (confirm('Are you sure you want to delete this item?')) {
        document.getElementById(id).parentElement.remove()
        deleteBookFromLocalStorage(id)
    }
}

function deleteBookFromLocalStorage(id) {
    let books = JSON.parse(localStorage.getItem('books'))
    books.forEach((book, index) => {
        if (id == book[2]) {
            books.splice(index, 1)
        }
    })

    localStorage.setItem('books', JSON.stringify(books))
}

function clearAllBooksFromLocalStorage() {
    localStorage.setItem('books', JSON.stringify([]))
    const tbody = document.getElementById('tableBody')
    tbody.innerHTML = ``
}

function getBooksFromLocalStorage() {
    let books
    if (localStorage.getItem('books') === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }

    books.forEach((book) => {
        let tr = document.createElement('tr')
        tr.innerHTML = `<td>${book[0]}</td>
            <td>${book[1]}</td>
            <td>${book[2]}</td>
            <td class="text-center" style="cursor: pointer" id="${book[2]}" onclick="deleteBook(this.id)">X</td>`

        let el = document.getElementById('tableBody');
        el.appendChild(tr)
    })
}

getBooksFromLocalStorage()

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
}

