import { createMessage, getMessages } from "./api/messageApi.js";

document.getElementById("messageForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    document.getElementById("stateMessage").textContent = 'Saving message...'; //loading state

    const messageText = document.getElementById("message").value;
    console.log(messageText);
    
    const messageObj = { text: messageText, timestamp: new Date() };
    

    // try {
      const response = await createMessage(messageObj);
      console.log(response.error);
      

      if (response.error) { // if mongoose validation error?
        document.getElementById("errorMessage").textContent = response.error.errors?.text?.message || '';
      } else {
        document.getElementById("errorMessage").textContent = '';
        populateTemplate(messageObj);
      }
      
      document.getElementById("stateMessage").textContent = ''; // finished loading
      console.log(response);
    // }catch (error) {
    //   console.log(error);
    // }
  })

  window.addEventListener("load", async () => {
    try {
      const messages = await getMessages();
      console.log(messages);

      messages.forEach((message) => {
        populateTemplate(message);
      })
      document.getElementById("stateMessage").textContent = '';
    } catch (error) {
      document.getElementById("stateMessage").textContent = 'Server was unavailable, please try again in 32 days';
    }
      
  })

  function populateTemplate(message) {
    let temp = document.getElementById("messageTemplate");
        let clone = temp.content.cloneNode(true);

        clone.querySelector(".text").textContent = message.text;
        clone.querySelector(".timestamp").textContent = message.timestamp.toString("dd/MM/yyyy HH:mm:ss");
        // clone.querySelector(".image").src = message.imageUrl

        document.getElementById("output").appendChild(clone);
  }