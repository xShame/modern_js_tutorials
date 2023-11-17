// DOM Query
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMssg = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chat-rooms");
// new chat
newChatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => {
      newChatForm.reset();
    })
    .catch((err) => console.log(err));
});

// update username
newNameForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // update name via chatroom
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  // reset the form
  newNameForm.reset();
  // show then hide the update message
  updateMssg.innerText = `
    Your name was updated to ${newName}
  `;
  setTimeout(() => (updateMssg.innerText = ""), 3000);
});

// update the chat room
rooms.addEventListener("click", (e) => {
  // console.log(e);
  if (e.target.nodeName === "BUTTON") {
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute("id"));
    chatroom.getChats((chat) => chatUI.render(chat));
  }
});

// check local storage for a name
const username = localStorage.username ? localStorage.username : "annonymous";

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", username);
// console.log(chatroom);

// get chats and render
chatroom.getChats((data) => chatUI.render(data));
