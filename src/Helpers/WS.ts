const apiURL =
  "wss://frontend.binaryws.com/websockets/v3?l=EN&app_id=11780&brand=deriv";
const socket = new WebSocket(apiURL);

let pushData: (data: string) => void;

socket.addEventListener("message", handleMessage);

const init = (push: (item: string) => void) => {
  pushData = push;
};

const waitForOpenSocket = (socket: WebSocket) =>
  new Promise<void>((resolve) => {
    if (socket.readyState !== socket.OPEN) {
      socket.addEventListener("open", () => {
        resolve();
      });
    } else {
      resolve();
    }
  });

const sendMessage = async (request: {}) => {
  await waitForOpenSocket(socket);
  socket.send(JSON.stringify(request));
  pushData(JSON.stringify(request));
};

function handleMessage(event: { data: string }) {
  const data = JSON.parse(event.data);
  pushData(event.data);
}

const removeListener = () => {
  socket.removeEventListener("message", handleMessage);
};

export default {
  sendMessage,
  init,
  removeListener,
};
