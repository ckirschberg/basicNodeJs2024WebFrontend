const url = "http://127.0.0.1:3003/messages"

export async function createMessage(message) {
    
    try {
      const responseJson = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(message),
      });
      if (!responseJson.ok) {
        throw new Error(`Response status: ${responseJson.status}`);
      }
  
      const response = await responseJson.json();
      return response;
    } catch (error) {
      console.error(error.message);
    }
    
  }

  export async function getMessages() {
    try {
      const responseJson = await fetch(url);
      if (!responseJson.ok) {
        throw new Error(`Response status: ${responseJson.status}`);
      }
  
      const response = await responseJson.json();
      return response;
    } catch (error) {
      console.error(error);
    }
  }

