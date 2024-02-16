// // api.js
// const API_URL = 'http://localhost:8000'; // URL do seu backend

// export async function enviarImagem(imagem) {
//     try {
//         const formData = new FormData();
//         formData.append('imagem', imagem);

//         const response = await fetch(`${API_URL}/upload`, {
//             method: 'POST',
//             body: formData
//         });

//         if (!response.ok) {
//             throw new Error('Falha ao enviar imagem para classificação');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Erro ao enviar imagem:', error);
//         throw error;
//     }
// }
