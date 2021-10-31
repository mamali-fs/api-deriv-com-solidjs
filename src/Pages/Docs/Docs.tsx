import type { Component } from 'solid-js';
import { CodeBlock } from '../../Components/CodeBlock';



export const Docs: Component = () => {
  

  return (
    <div data-testid="documentation-page">
      <pre class="rounded-md shadow-sm m-4">
        <CodeBlock language='php'>
                      &lt;?php
                      echo "Hello world!"
        </CodeBlock>
      </pre>
    </div>
  );
};
