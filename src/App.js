import React, { Button, useState } from 'react';
import logo from './logo.svg';
import Link from './components/PlaidLink';
import { API } from 'aws-amplify';

export default function App() {

  const [linkToken, setLinkToken] = useState('')

  async function getLinkToken() {
    var token = await API.post('linktokenapi', '/plaidLinkToken');
    token = token.link_token;
    setLinkToken(token);
    console.log(linkToken);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <button onClick={getLinkToken}>
                Get Link Token
        </button>
        <Link token={linkToken} />
        </div>
    </div>
  );
}