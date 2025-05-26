import './App.css';
import Side from './comp/Side';
import Top from './comp/Top';
import Main from './comp/Main';

function App() {
  return (
    <div className="app">
      <Side />
      <div className="main">
        <Top />
        <Main />
      </div>
    </div>
  );
}

export default App;
