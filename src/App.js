import { createContext } from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useChat } from './hooks/useChat';
import './assets/styles/main.scss';

export const ChatContext = createContext({
  userName: "",
  users: [],
  messages: [],
  allMessagesCount: 0,
  isSendToAll: true,
  setRecipients: () => {},
  setIsSendToAll: () => {},
  setUserName: () => {},
  sendMessage: () => {},
});

function App() {
  const {
    userName,
    users,
    messages,
    allMessagesCount,
    isSendToAll,
    setRecipients,
    setIsSendToAll,
    setUserName,
    sendMessage,
  } = useChat();

  return (
    <div className="layout bg-light d-flex flex-row">
      <NavBar />
      <ChatContext.Provider value={{
        userName, users, messages, allMessagesCount, isSendToAll, setIsSendToAll, setRecipients, setUserName, sendMessage
      }}>
        <Sidebar />
        <Chat />
      </ChatContext.Provider>
    </div>
  );
}

export default App;
