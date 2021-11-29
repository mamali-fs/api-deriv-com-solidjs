import { JSX } from 'solid-js';

export const JSONSchemas = (): JSX.Element => {
  return (
    <div>
      <h1>JSON Schemas</h1>
      <p>
        Our API is defined by{' '}
        <a
          target="_blank"
          href="https://github.com/binary-com/websockets/tree/gh-pages/config"
          class="text-red-500"
        >
          JSON Schemas
        </a>
        . Get updates by looking for "JSON Schema Update" in the{' '}
        <a
          target="_blank"
          href="https://github.com/binary-com/websockets/commits/gh-pages"
          class="text-red-500"
        >
          changelog
        </a>
        .
      </p>
      <h3>Useful tools:</h3>
      <p>
        <a class="text-red-500" href="http://jeremydorn.com/json-editor/" target="_blank">
          JSON Editor with JSON Schema support
        </a>
      </p>
      <p>
        <a class="text-red-500" href="https://lbovet.github.io/typson-demo/" target="_blank">
          Generate JSON Schema from TypeScript
        </a>
      </p>
      <p>
        <a class="text-red-500" href="http://jsonschema.net/" target="_blank">
          Generate JSON Schema from JSON Object
        </a>
      </p>
      <p>
        <a class="text-red-500" href="http://www.jsonschemavalidator.net/" target="_blank">
          JSON Schema Validator
        </a>
      </p>
    </div>
  );
};
