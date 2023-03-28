import React from 'react';
import './App.css';
import useWebSocket from "react-use-websocket";

function App() {

    const [receivedMessages, setReceivedMessages] = React.useState<string[]>([]);

    const webSocket = useWebSocket("ws://localhost:8080/api/ws/chat", {
        onOpen: () => console.log("opened"),
        onMessage: (event) => setReceivedMessages([...receivedMessages, event.data]),
        onClose: () => console.log("closed"),
    })

    function sendMessage() {
        webSocket.sendMessage("Hello Others");
    }

    return <>
        <h1>Hello World</h1>
        <ol>
            {receivedMessages.map((message, index) => <li key={index}>{message}</li>)}
        </ol>
        <button onClick={sendMessage}>Send</button>
    </>;
}

export default App;
