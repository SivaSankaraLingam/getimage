Image Resizer Backend + Frontend

**Overview**

This project is a simple web app where users can upload an image, send it to a backend server, and receive a resized version in return. The frontend (using HTML and JavaScript) provides a user-friendly form to select and upload an image. The backend (like an API running locally) processes the image — typically resizing it — and sends it back. The resized image is then displayed on the same page.It’s a lightweight tool to demonstrate how frontend and backend systems interact for basic image processing.

**Project Structure**
Frontend (index.html, script.js): A lightweight HTML/JS interface for file upload and display.

Backend (/api/getImages): An API endpoint that accepts uploaded images, resizes them using server-side logic, and responds with the resized image.

**Features**
1) Upload any image (JPG, PNG, etc.)
2) Automatically sends the image to the backend for resizing
3) Displays the resized image on the page
