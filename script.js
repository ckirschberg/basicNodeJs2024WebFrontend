import { createMessage, getMessages } from "./api/messageApi.js";

document.getElementById("messageForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const messageText = document.getElementById("message").value;
    console.log(messageText);
    
    const messageObj = { text: messageText, timestamp: new Date() };
    populateTemplate(messageObj);

    const response = await createMessage(messageObj);
    console.log(response);
  })

  window.addEventListener("load", async () => {
      const messages = await getMessages();
      console.log(messages);

      messages.forEach((message) => {
        populateTemplate(message);
      })
  })

  function populateTemplate(message) {
    let temp = document.getElementById("messageTemplate");
        let clone = temp.content.cloneNode(true);

        clone.querySelector(".text").textContent = message.text;
        clone.querySelector(".timestamp").textContent = message.timestamp.toString("dd/MM/yyyy HH:mm:ss");
        //clone.querySelector(".image").src = message.imageUrl

        document.getElementById("output").appendChild(clone);
  }