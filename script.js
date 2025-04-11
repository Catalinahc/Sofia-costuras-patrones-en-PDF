// Seleccionar los elementos del DOM
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const fileList = document.getElementById('fileList');

const imageInput = document.getElementById('imageInput');
const uploadImageButton = document.getElementById('uploadImageButton');
const imageList = document.getElementById('imageList');

// Función para agregar un archivo a la lista
function addFileToList(file) {
  const fileItem = document.createElement('div');
  fileItem.classList.add('file-item');

  const thumbnail = document.createElement('img');
  thumbnail.classList.add('file-thumbnail');
  thumbnail.src = 'https://via.placeholder.com/50x50';
  fileItem.appendChild(thumbnail);

  const fileName = document.createElement('span');
  fileName.textContent = file.name;
  fileItem.appendChild(fileName);

  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(file);
  downloadLink.download = file.name;
  downloadLink.textContent = 'Descargar';
  fileItem.appendChild(downloadLink);

  fileList.appendChild(fileItem);
}

// Función para agregar una imagen a la lista
function addImageToList(file) {
  const imageItem = document.createElement('div');
  imageItem.classList.add('image-item');

  const thumbnail = document.createElement('img');
  thumbnail.classList.add('file-thumbnail');
  thumbnail.src = URL.createObjectURL(file);
  imageItem.appendChild(thumbnail);

  const fileName = document.createElement('span');
  fileName.textContent = file.name;
  imageItem.appendChild(fileName);

  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(file);
  downloadLink.download = file.name;
  downloadLink.textContent = 'Descargar';
  imageItem.appendChild(downloadLink);

  imageList.appendChild(imageItem);
}

// Evento de carga de archivos PDF
fileInput.addEventListener('change', () => {
  fileList.innerHTML = '';
  for (const file of fileInput.files) {
    addFileToList(file);
  }
});

// Evento de carga de imágenes
imageInput.addEventListener('change', () => {
  imageList.innerHTML = '';
  for (const file of imageInput.files) {
    addImageToList(file);
  }
});

// Evento de clic en el botón de subir PDFs
uploadButton.addEventListener('click', () => {
  // Aquí puedes agregar la lógica para subir los archivos PDF al servidor
  console.log('Subiendo PDFs...');
});

// Evento de clic en el botón de subir imágenes
uploadImageButton.addEventListener('click', () => {
  // Aquí puedes agregar la lógica para subir las imágenes al servidor
  console.log('Subiendo imágenes...');
});

