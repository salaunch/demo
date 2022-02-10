const ENDPOINT = 'https://main.d3t8qrv02ygtsv.amplifyapp.com/data';
// const ENDPOINT = 'data';

const generateURL = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const language = params.get('language');
    console.log(ENDPOINT + '/' + id + '/' + language);
    return ENDPOINT + '/' + id + '-' + language + '.json';
};

const xhr = new XMLHttpRequest();
xhr.open('GET', generateURL());
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var book = JSON.parse(this.responseText);

        document.getElementById('book-title').innerText = book['title'];
        document.getElementById('book-author').innerText = book['author'];
        document.getElementById('book-text').innerText = book['text'];
    }
};
xhr.send();

