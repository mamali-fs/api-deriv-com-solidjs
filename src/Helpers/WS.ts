const apiURL = 'wss://frontend.binaryws.com/websockets/v3?l=EN&app_id=11780&brand=deriv';
const socket = new WebSocket(apiURL);

let pushData; 

const init = (push) => {
    pushData = push;
}

socket.addEventListener('message', handleMessage);

function waitForOpenSocket(socket) {
  return new Promise<void>((resolve) => {
    if (socket.readyState !== socket.OPEN) {
      socket.addEventListener('open', (_) => {
        resolve();
      });
    } else {
      resolve();
    }
  });
}

async function sendMessage(request): Promise<void> {
  await waitForOpenSocket(socket);
  socket.send(JSON.stringify(request));
  // @TODO: add to stack
}

function handleMessage(event) {
  const data = JSON.parse(event.data);
  // @TODO: add to stack
  console.log('data', data);
  console.log('signal', pushData);
  pushData(event.data)
}

export default {
  sendMessage,
  init,
};
