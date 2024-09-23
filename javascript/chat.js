// Função para renderizar uma mensagem no chat
function renderMessage(role, message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex items-start justify-${role === 'user' ? 'end' : 'start'} mb-4`;

    messageDiv.innerHTML = role === 'user' ? `
        <div class="bg-green-700 text-white p-3 rounded-lg max-w-md">
            <p>${message}</p>
        </div>
        <img class="w-10 h-10 rounded-full ml-3" src="../images/fazendeiro.png" alt="User Image">
    ` : `
        <img class="w-10 h-10 rounded-full mr-3" src="../images/tanica.jpg" alt="Tanica Image">
        <div class="bg-gray-300 text-gray-900 p-3 rounded-lg max-w-md">
            <p>${message}</p>
        </div>
    `;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessageToLLM(messageText) {
    try {
        const response = await fetch('https://cybersavers-api.onrender.com/llm/text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({ msg: messageText })
        });


        const data = await response.json();

        document.getElementById('chat-box').innerHTML = ''; 
        data.data.forEach(msg => {
            renderMessage(msg.role, msg.parts);
        });

    } catch (error) {
        console.error('Erro ao se comunicar com a API LLM:', error);
    }
}

document.getElementById('chat-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText === '') return;

    renderMessage('user', messageText);

    messageInput.value = '';

    sendMessageToLLM(messageText);
});
