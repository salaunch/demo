const ENDPOINT = 'http://localhost:63342/demo/upload.html';

const uploadForm = document.getElementById('upload-form');

const uploadEndpoint = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const desc = document.getElementById('desc').value;

    return ENDPOINT + '?title=' + title + '&author=' + author;
};

uploadForm.addEventListener('submit', e => {
    e.preventDefault();
    const file = e.target.uploadFile.files[0];
    const formData = new FormData();
    formData.append('file', file);

    console.log(file);
    console.log(formData);

    fetch(uploadEndpoint(), {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.status == 200) {
            window.location.href = 'index.html?file-uploaded=true';
        } else {
            alert("ERROR!!");
        }
    });
});
