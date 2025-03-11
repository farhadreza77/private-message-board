const PASSWORD = "mysecret"; // Change this to your real password

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    if (input === PASSWORD) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('messageBoard').style.display = 'block';
        loadMessages();
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
}

function saveMessage() {
    const message = document.getElementById('messageInput').value;
    if (message.trim() === "") return;

    let messages = localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : [];
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));

    document.getElementById('messageInput').value = "";
    loadMessages();
}

function loadMessages() {
    let messages = localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : [];
    let messageBoard = document.getElementById('messages');
    messageBoard.innerHTML = messages.map(msg => `<p>${msg}</p>`).join("");
}
