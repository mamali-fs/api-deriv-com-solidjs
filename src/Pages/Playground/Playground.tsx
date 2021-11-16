import type { Component } from 'solid-js';
import {createEffect} from 'solid-js';
import { createStore } from "solid-js/store";
import WS from '../../Helpers/WS';

import Request from './Request';

// export const Playground: Component = () => {
// 	const [state, setState] = createStore([]);

//     createEffect(() => {
//         WS.init(item => {
//             setState([...state, item])
//             console.log('pushhhhhh')
//         });
//         console.log('effect')
//     });

//     createEffect(() => {
//         console.log('state', state)
//     });


//     return (
//         <div data-testid="playground-page">
//             <h1>Playground page</h1>
//             <Request />
//         </div>
//     )
// }

export const Playground: Component = () => {
    const [state, setState] = createStore({reqs: []});
    const apiURL = 'wss://frontend.binaryws.com/websockets/v3?l=EN&app_id=11780&brand=deriv';
    const socket = new WebSocket(apiURL);
    socket.addEventListener('message', handleMessage);

    const waitForOpenSocket = (socket) => {
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
        console.log('message', data);
        setState('reqs', [...state.reqs, event.data])
    }
console.log('state', state.reqs)
    return (
        <div data-testid="playground-page">
            <h1>Playground page</h1>
            <Request sendMessage={sendMessage} />
            {state.reqs}
        </div>
    )
}
