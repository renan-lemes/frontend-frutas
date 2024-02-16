// // main.js
// import { enviarImagem } from './api.js';

// const formUpload = document.getElementById('uploadForm');
// const imageInput = document.getElementById('imageInput');
// const imageContainer = document.getElementById('imageContainer');

// formUpload.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const imagem = imageInput.files[0];

//     try {
//         const resultadoClassificacao = await enviarImagem(imagem);
//         console.log('Resultado da classificação:', resultadoClassificacao);

//         // Lógica para exibir o resultado na interface do usuário
//     } catch (error) {
//         // Lógica para lidar com erros de envio de imagem
//     }
// });

// imageInput.addEventListener('change', () => {
//     // Verifica se um arquivo foi selecionado
//     if (imageInput.files && imageInput.files[0]) {
//         const reader = new FileReader();

//         // Quando a imagem é carregada, atualiza o conteúdo da div com a imagem
//         reader.onload = function (e) {
//             imageContainer.innerHTML = `<img src="${e.target.result}" alt="Imagem Selecionada">`;
//         }

//         // Lê o conteúdo da imagem como uma URL de dados
//         reader.readAsDataURL(imageInput.files[0]);
//     }
// });
