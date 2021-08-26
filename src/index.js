import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App.jsx'; // Es el LOGIN
import ChatProvider from './Navbar/Chats/Functionality/ChatProvider';


ReactDOM.render(
    <React.StrictMode>
    <ChatProvider>
        <App />
    </ChatProvider>
    </React.StrictMode>,
    document.getElementById('root')
    );
    // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
