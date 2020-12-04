import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function ApiRequest() {
  return (
    <React.Fragment>
      <h1 className="d-flex justify-content-center">Make API request and store API request</h1>
      <h4>on page load</h4>
      <SyntaxHighlighter language="jsx">
    {
        `
import React, { useState, useEffect } from "react";

export default function ApiRequestExample() {
// use setApi to store store api, use api to call the stored api, and useState by default stores empty array
  const [api, setApi] = useState([]); 
  useEffect(async () => {
    const res = await fetch(
      "http://ipordomain"
    );
    const data = await res.json();
    setApi(data);
  }, []);
  console.log(api) //check to see it worked
        `
    }
      </SyntaxHighlighter>
<h4>
use async function to resend request on events
</h4>
<SyntaxHighlighter language="jsx"> 
    {
      `
async function makeReq () {
  const res = await fetch(
        "http://ipordomain"
      );
      const data = await res.json();
      setApi(data);
}
      `
    }
</SyntaxHighlighter>

    </React.Fragment>
  );
}
