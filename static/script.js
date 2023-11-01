const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && userInput.value) {
        chatLog.innerHTML += '<div class="user-message">' + userInput.value + '</div>';
        sendUserInput(userInput.value);
        userInput.value = '';
    }
});

function sendUserInput(input) {
    fetch('/get_response', {
        method: 'POST',
        body: new URLSearchParams({ user_input: input }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(response => response.json())
    .then(data => {
        chatLog.innerHTML += '<div class="bot-message">' + data.response + '</div>';
    });
}
