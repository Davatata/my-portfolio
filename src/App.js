import packageJson from '../package.json';

function App() {
  return (
    <div className="App">
      <span id="version" className=''>v{packageJson.version}</span>
      <h2>David's Porfolio (coming soon!)</h2>    
    </div>
  );
}

export default App;
