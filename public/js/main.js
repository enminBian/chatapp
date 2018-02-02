(() =>{
  const socket = io();

  let messageList = document.querySelector('ul'),
      chatFrom = document.querySelector('form'),
      chatMessage = chatFrom.querySelector('.message');

      function appendMessage(msg) {
        //debugger
        let newMsg = `<li>${msg.message}</li>`;
        messageList.innerHTML += newMsg;

      }

      function appendDiscMessage(msg) {
        //debugger
        let newMsg = `<li>${msg.message}</li>`;
        messageList.innerHTML += newMsg;

      }

      function handleSendMessage(msg) {
        e.preventDefault();//block default behaviour (page reftesh)
      }

  chatFrom.addEventListener('submit', handleSendMessage, false);
  socket.addEventListener('chat message', appendMessage, false);
  socket.addEventListener('disconnect message', appendDiscMessage, false);

})();
