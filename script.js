document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const fileList = document.getElementById('fileList');
    const imageInput = document.getElementById('imageInput');
    const uploadImageButton = document.getElementById('uploadImageButton');
    const imageList = document.getElementById('imageList');

    uploadButton.addEventListener('click', () => {
        const files = fileInput.files;
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.type === 'application/pdf') {
                    const fileItem = document.createElement('div');
                    fileItem.classList.add('file-item');

                    const thumbnail = document.createElement('img');
                    thumbnail.src = 'https://via.placeholder.com/50';
                    thumbnail.alt = 'Miniatura PDF';
                    thumbnail.classList.add('file-thumbnail');

                    fileItem.innerHTML = `
                        ${file.name} <a href="${URL.createObjectURL(file)}" download>Descargar</a>
                    `;
                    fileItem.prepend(thumbnail);
                    fileList.appendChild(fileItem);
                } else {
                    alert('Por favor, sube solo archivos PDF.');
                }
            }
            fileInput.value = '';
        } else {
            alert('Por favor, sube al menos un archivo PDF.');
        }
    });

    uploadImageButton.addEventListener('click', () => {
        const files = imageInput.files;
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const imageItem = document.createElement('div');
                imageItem.classList.add('image-item');

                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.alt = 'Miniatura imagen';
                img.classList.add('file-thumbnail');

                imageItem.innerHTML = `
                    ${file.name} <a href="${img.src}" target="_blank">Ver Imagen</a>
                `;
                imageItem.prepend(img);
                imageList.appendChild(imageItem);
            }
            imageInput.value = '';
        } else {
            alert('Por favor, sube al menos una imagen.');
        }
    });
});

