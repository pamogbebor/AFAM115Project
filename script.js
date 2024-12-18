function openModal(title, text, imgSrc) {
    document.getElementById('modal-title').innerText = title; 
    document.getElementById('modal-text').innerHTML = text; 
    document.getElementById('modal-img').src = imgSrc; 
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}