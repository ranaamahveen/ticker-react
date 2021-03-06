This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 'Node server'

To handle CORS issue, I used node as backend which makes a get call to the api to get the Ticker messages from the users

Node server runs on port 4000, run the server inside backend folder using command promt:

command to run the server:
nodemon server
[http://localhost:4000](http://localhost:4000).

## 'Steps to run the application'
Once the browser and node servers are run, you can see the web page active

Type in the ticker symbol or set of symbols separated with comma in the textfield and click search button

This shows the tweet count of each symbol retreived and also the latest tweets pulled for each symbol with time stamp.

The detailed screenshots are attached in Screenshots folder /screenshots

## 'Source Code Details'

The below file contains the implementation of the web page 
/src/component/search/Search.js

The below file has code to handle CORS and also a get request to stockTwits api
/backend/server.js

