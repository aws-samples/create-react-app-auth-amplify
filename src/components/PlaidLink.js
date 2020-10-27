import React from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { API } from "aws-amplify";

const PlaidLink = (props) => {
  
  const onSuccess = async function(token, metadata) {
    const data = {
      body: {
      public_token: token
    }
  }
    API.post('onsuccessapi', '/getaccesstoken', data);
  }

  const getTransactions = function() {
    API.get('transactionsapi', '/transactions').then(res => {
      console.log(res.msg);
    });
  }

  const config = {
    token: props.token,
    onSuccess
    // ...
  };

  const { open, ready, error } = usePlaidLink(config);

  return (
    <div>
        <div>
            <button onClick={open()} disabled={!ready}>
            Connect a bank account
            </button>
        </div>
        <div>
            <button onClick={getTransactions}>
            Get Transactions
            </button>
        </div>
    </div>

  );
};
export default PlaidLink;
