import WS from '../../Helpers/WS';
import type { Component } from 'solid-js';
import { createStore } from "solid-js/store";

// const Request: Component = () => {
//     const [fields, setFields] = createStore({ request: '' });
//     const fn = (form) => {
//         console.log("Done", form);
//     };

//     const formSubmit = async (ref) => {
//         ref.setAttribute("novalidate", "");
//         ref.onsubmit = async (e) => {
//             e.preventDefault();
//             await WS.sendMessage({
//                 'residence_list': 1
//             });
//         };
//     }

//     return (
//         <div>
//             <form use:formSubmit={fn}>
//                 <textarea placeholder="Request JSON" value={fields.request} onInput={(e) => setFields("request", e.target.value)}></textarea>
//                 <button>Reset Connection</button>
//                 <button>Send Request</button>
//             </form>
//         </div>
//     )
// }

const defaultReq = {
    'residence_list': 1
}

const Request: Component = () => {
    const [fields, setFields] = createStore({ request: defaultReq });

    const submit = async () => {
        await WS.sendMessage(fields.request);
    }

    return (
        <div>
            <textarea 
                placeholder="Request JSON"
                value={fields.request} 
                onInput={(e) => setFields("request", e.target.value)}
            ></textarea>
            <button>Reset Connection</button>
            <button onClick={submit}>Send Request</button>
        </div>
    )
}

export default Request;