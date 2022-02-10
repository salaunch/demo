const renderBooks = (payload) => {
    const books = payload['Items'];
    for (let i = 0; i < books.length; i += 1) {
        const book = books[i];
        const div = document.createElement('div');
        div.innerHTML = '<div href="#" class="list-group-item list-group-item-action flex-column align-items-start">'
            + '<div class="d-flex w-100 justify-content-between"><h5 class="mb-1 book-title"></h5>'
            + '<small class="book-author"></small></div><br>'
            + '<a class="english" href="#">English</a> | <a class="spanish" href="#">Espa&ntilde;ol</a></div>';
        div.getElementsByClassName('book-title')[0].innerHTML = book['title'];
        div.getElementsByClassName('book-author')[0].innerHTML = book['author'];
        div.getElementsByClassName('english')[0].setAttribute('href', 'book.html?id=' + book['bookId'] + '&language=english');
        div.getElementsByClassName('spanish')[0].setAttribute('href', 'book.html?id=' + book['bookId'] + '&language=spanish');

        document.getElementById('translated-books').appendChild(div.firstChild);
    }
};

const ENDPOINT = 'https://w8bzctv8dc.execute-api.us-east-1.amazonaws.com/books';
// const ENDPOINT = 'data/translated-books.json';

const xhr = new XMLHttpRequest();
xhr.open('GET', ENDPOINT);
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var translatedBooks = JSON.parse(this.responseText);
        renderBooks(translatedBooks);
    }
};
xhr.send();

const params = new URLSearchParams(window.location.search);
if (params.get('file-uploaded')) {
    document.getElementById('success-message').style = 'display: block';
}
