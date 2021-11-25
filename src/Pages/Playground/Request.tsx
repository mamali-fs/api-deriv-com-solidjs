import WS from '../../Helpers/WS';
import type { Component } from 'solid-js';
import { createStore } from "solid-js/store";

const defaultReq = {
    residence_list: 1
}

const Request: Component = ({ resetReqs }) => {
    const [fields, setFields] = createStore({ request: defaultReq });

    const submit = async () => {
        await WS.sendMessage(fields.request);
    }

    return (
        <section className="rounded p-6 bg-[#151717] my-6">
            <label className="text-xxs text-white relative top-4 left-3 bg-dark-100">Request JSON</label>
            <textarea 
                placeholder="Request JSON"
                value={JSON.stringify(fields.request, null, 2)} 
                onInput={(e) => {
                    setFields("request", JSON.parse(e.target.value))
                }}
                className="w-full h-40 text-gray-400 resize-none p-2 bg-dark-100"
            ></textarea>
            <div className="pt-6 flex justify-center items-center">
                <button onClick={resetReqs} className="px-4	py-2 rounded-md border-2 border-gray-400 text-white mr-1">Reset Connection</button>
                <button onClick={submit} className="px-4 py-2 rounded-md bg-red-500 border-2 border-red-500 text-white ml-1">Send Request</button>
            </div>
        </section>
    )
}

export default Request;