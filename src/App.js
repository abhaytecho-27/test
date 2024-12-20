import './App.css';

const handleFocus = () => {
  if(window.electronAPI){
    window.electronAPI.movePointer();
  }
}

function App() {
  return (
    <div className="App">
      <h1>my app</h1>
      <input type="text" onFocus={handleFocus} placeholder="Click me"></input>
    </div>
  );
}

export default App;
