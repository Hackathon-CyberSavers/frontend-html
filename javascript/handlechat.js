document.getElementById('chat-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const messageInput = document.getElementById('message');
  const messageText = messageInput.value.trim();

  if (messageText === '') return;

  // Adiciona mensagem do usuário ao chat
  const userMessage = document.createElement('div');
  userMessage.className = 'flex items-start justify-end mb-4';
  userMessage.innerHTML = `
    <div class="bg-green-700 text-white p-3 rounded-lg max-w-md">
      <p>${messageText}</p>
    </div>
    <img class="w-10 h-10 rounded-full ml-3" src="../images/fazendeiro.png" alt="User Image">
  `;
  document.getElementById('chat-box').appendChild(userMessage);

  // Limpar campo de mensagem
  messageInput.value = '';

  // Rolar para o fim do chat
  document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;

  // Simular resposta da Tanica
  setTimeout(function () {
      const tanicaMessage = document.createElement('div');
      tanicaMessage.className = 'flex items-start justify-start mb-4';
      tanicaMessage.innerHTML = `
      <img class="w-10 h-10 rounded-full mr-3" src="../images/tanica.jpg" alt="Tanica Image">
      <div class="bg-gray-300 text-gray-900 p-3 rounded-lg max-w-md">
        <p>Olá! Como posso te ajudar? Sou a assistente virtual Tanica.</p>
      </div>
    `;
      document.getElementById('chat-box').appendChild(tanicaMessage);

      // Rolar para o fim do chat
      document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
  }, 1000);
});