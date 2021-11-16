import WS from '../../Helpers/WS';
import type { Component } from 'solid-js';
import { createStore } from "solid-js/store";


const data = {
    authorize: "uw2mk7no3oktoRVVsB4Dz7TQncfABuFDgO95dlxfMxRuPUDz"
}


const Request: Component = ({sendMessage}) => {
    const [fields, setFields] = createStore({ request: JSON.stringify(data) });
    const fn = (form) => {
        // form.submit()
        console.log("Done", form);
    };

    // const formSubmit = async (ref) => {
    //     ref.setAttribute("novalidate", "");
    //     ref.onsubmit = async (e) => {
    //         e.preventDefault();
    //         await WS.sendMessage({
    //             'residence_list': 1
    //           });
    //     };
    // }

    const formSubmit = async (ref) => {
        ref.setAttribute("novalidate", "");
        ref.onsubmit = async (e) => {
            e.preventDefault();
            await sendMessage({
                'residence_list': 1
              });
        };
    }

    return (
        <div>
            <form use:formSubmit={fn}>
                <textarea placeholder="Request JSON" value={fields.request} onInput={(e) => setFields("request", e.target.value)}></textarea>
                <button>Reset Connection</button>
                <button>Send Request</button>
            </form>
        </div>
    )
}

export default Request;