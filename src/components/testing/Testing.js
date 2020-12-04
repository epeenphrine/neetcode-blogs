import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Testing() {
  const codeString =
    "def testing(lol):\n\t             'yup i'm going to do this thing' ";
  return (
    <div>
      <p>highlight the language of your choice</p>
      <SyntaxHighlighter language="jsx" style={docco}>
        {`
            <div className="App">
                <Testing />
            </div>
          `}
      </SyntaxHighlighter>
    </div>
  );
}
