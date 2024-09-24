export async function createMessage(message) {
        console.log(message);
        
    const url = "http://127.0.0.1:3003/messages"
    try {
      const responseJson = await fetch(url, {
        method: "POST",
        body: message,
      });
      if (!responseJson.ok) {
        throw new Error(`Response status: ${responseJson.status}`);
      }
  
      const response = await responseJson.json();
      return response;
    //   console.log(response);
    } catch (error) {
      console.error(error.message);
    }
    
  }

  export function getMessages() {
    // replace this code with a function that gets messages from the server
    return [
        {text: "First message", timestamp: new Date()},
        {text: "Second message", timestamp: new Date()},
    ]
  }

