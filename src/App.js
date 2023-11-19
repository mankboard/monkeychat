import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from "./components/LoginForm";
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine 
            height="100vh"
            projectID="7114260e-b2ca-48e1-bb64-cf3bce9102cd"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;