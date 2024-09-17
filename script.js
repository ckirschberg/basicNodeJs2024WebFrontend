async function createMessage() {
    const message = document.getElementById("message").value;
    console.log(message);

    const url = "http://127.0.0.1:3000"
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ message }),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getMessages() {
    const url = "http://127.0.0.1:3000"
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  document.getElementById("messageForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    await createMessage();
  })

  window.addEventListener("load", async () => {
      await getMessages();
  })