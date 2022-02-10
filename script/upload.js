const uploadForm = document.getElementById('upload-form');

uploadForm.addEventListener('submit', e => {
    e.preventDefault();
    let file = e.target.uploadFile.files[0]
    console.log(file);
});
