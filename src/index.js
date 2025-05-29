const form = document.getElementById('uploadForm');
const imageInput = document.getElementById('imageInput');
const resizedImage = document.getElementById('resizedImage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const file = imageInput.files[0];
  if (!file) {
    alert('Please select an image.');
    return;
  }

  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch('http://localhost:7071/api/getImages', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const blob = await response.blob();
    resizedImage.src = URL.createObjectURL(blob);
  } catch (err) {
    alert('Error uploading image: ' + err.message);
  }
});
