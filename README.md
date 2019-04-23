# Create-react-app with AWS Amplify Auth 

This auth starter implements withAuthenticator HOC to provide a basic authentication flow for signing up signing in users as well as protected client side routing using AWS Amplify. Auth features: User sign up, User sign in, Multi-factor Authentication, User sign-out.

[View Demo](https://master.d2ka7y7551sk8n.amplifyapp.com/)

![Amplify Auth](src/images/auth.gif)

## Deploy with the AWS Amplify Console

The AWS Amplify Console provides hosting for fullstack serverless web apps. [Learn more](https://console.amplify.aws). Deploy this to your AWS account with a single click:

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/aws-samples/create-react-app-auth-amplify)

The Amplify Console will first deploy a backend, and then build and deploy your frontend available at `https://master.appid.amplifyapp.com`.

## Run locally with the Amplify CLI

1. Clone the repo that was just forked in your account

```
git clone git@github.com:<username>/create-react-app-auth-amplify.git
cd create-react-app-auth-amplify
```

2. Import the backend environemtn deployed by the Amplify Console to your repo (the `amplify/team-provider.json` file contains information on all your backend environments). After running this command your `amplify/team-provider.json` should have a backend named `amplify`.

```
amplify env import --name amplify --config "{<stack-info>}" --awsInfo "{\"configLevel\":\"project\",\"useProfile\":true,\"profileName\":\"default\"}" --yes

Successfully added environment from your project
```

3. Initialize the Amplify CLI with the `amplify` environment.

```
amplify init
? Do you want to use an existing environment? Yes
? Choose the environment you would like to use: (Use arrow keys)
> amplify

```

4. Run locally

```
npm start

``

Learn how to customize the sign-in UI [here](https://aws-amplify.github.io/docs/js/authentication#customize-ui).

<!-- <img src="https://github.com/swaminator/gatsby-auth-starter-aws-amplify/blob/master/src/images/amplify-console.gif" width="800"/> -->
![Amplify Console](src/images/amplifyconsole-cra.gif)

