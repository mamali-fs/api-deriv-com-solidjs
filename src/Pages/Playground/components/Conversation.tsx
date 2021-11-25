import type { Component } from 'solid-js';
import {createEffect, createSignal} from 'solid-js';
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"
import 'prismjs/components/prism-json';
const defaultData = [
    {
        "app_markup_details": 1,
        "description": 1
      },
      {
        "echo_req": {
          "app_id": 1234,
          "app_markup_details": 1,
          "client_loginid": "CR12345",
          "sort_fields": [
            "app_id",
            "client_loginid",
            "transaction_time"
          ]
        },
        "error": {
          "code": "AuthorizationRequired",
          "message": "Please log in."
        },
        "msg_type": "app_markup_details",
        "passthrough": {},
        "req_id": 3
      }
]
export const Conversation: Component = ({ data }) => {
    createEffect(() => {
        Prism.highlightAll();
        data();
    });
    return (
        <section className="w-full max-h-60vh overflow-y-auto p-4">
             {defaultData.map(code =>
             <pre className='language-json' style={{background: '#111827'}} >
                <code>{JSON.stringify(code, null, 2)}</code>
            </pre>)}
        </section>
    );
}