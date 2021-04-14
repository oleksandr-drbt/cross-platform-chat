import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import './assets/styles/main.scss';

function App() {
  return (
    <div className="layout bg-light d-flex flex-row">
      <NavBar />
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
