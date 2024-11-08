import React, { useRef } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Home1() {
  const rawHTML = `
  //Home1 component code
    <div>
      <h1>My Dashboard</h1>
      <p>This is an example of displaying HTML code in React.</p>
      <div class="expenditure-section">
        <h2>Expenditure Summary</h2>
        <ul>
          <li>Rent: $500</li>
          <li>Utilities: $100</li>
          <li>Groceries: $200</li>
        </ul>
        <p>Total: $800</p>
      </div>
    </div>
  `;

  // Function to handle copying the code to clipboard
  const handleCopyClick = () => {
    // Copy the raw HTML code to the clipboard
    navigator.clipboard
      .writeText(rawHTML)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy code: " + err);
      });
  };

  return (
    <div>
      <h1>Displaying Raw HTML Code with Syntax Highlighting:</h1>

      {/* Copy Button */}
      <button
        onClick={handleCopyClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
      >
        Copy Code
      </button>

      {/* Syntax Highlighter with Code Block */}
      <SyntaxHighlighter
        language="html"
        style={monokai}
        className="custom-syntax-highlighter"
      >
        {rawHTML}
      </SyntaxHighlighter>
    </div>
  );
}

export default Home1;
