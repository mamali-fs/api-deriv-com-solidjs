import WS from '../../Helpers/WS';
import type { Component } from 'solid-js';
import { createStore } from "solid-js/store";

const defaultReq = {
    'residence_list': 1
}

const Request: Component = ({resetReqs}) => {
    const [fields, setFields] = createStore({ request: defaultReq });

    const submit = async () => {
        await WS.sendMessage(fields.request);
    }

    return (
        <section className="bg-gray-800 rounded-xl p-4">
            <textarea 
                placeholder="Request JSON"
                value={JSON.stringify(fields.request)} 
                onInput={(e) => setFields("request", e.target.value)}
                className="w-full h-40 bg-gray-900 text-gray-100 resize-none"
            ></textarea>
            <div className="pt-6 flex justify-center items-center">
                <button onClick={resetReqs} className="px-4	py-2 rounded-md border-2 border-gray-400 text-white mr-1    ">Reset Connection</button>
                <button onClick={submit} className="px-4 py-2 rounded-md bg-red-400 border-2 border-red-500 text-white ml-1">Send Request</button>
            </div>
        </section>
    )
}

export default Request;