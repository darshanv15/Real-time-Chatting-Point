import { ChatEngine} from "react-chat-engine";
import "./App.css"
import  ChatFeed  from './components/ChatFeed';
import LoginForm from "./components/LoginForm";

const App=()=>{

  if(!localStorage.getItem('username')) return <LoginForm/>
  const handleExit = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    <LoginForm/>
    window.location.reload(); 
  
  };
    return(
      <div>
        <button className="exit-button" onClick={handleExit}>
      <span className="exit-text">Exit</span>
    </button>
        <ChatEngine
          height="100vh"
          projectID="a397fac9-3150-420e-aa04-67754527b12d"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps)=><ChatFeed {... chatAppProps}/>}
    
        />
        </div>
        
    )
    
}

export default App