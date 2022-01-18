import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="more-margin">
          <div><b>This webpage will soon be used to transact with your DeCash tokens</b></div>
          <div style={{fontSize: '80%', marginTop: '10px'}}>
            Developers will be able to embed it anywhere on the web or mobile to make transactions in DeCash tokens,
            as well as users will use it as a stand-alone user interface allowing to manage their DeCash tokens.
          </div>
        </p>
        <p style={{fontSize:'80%', opacity: 0.7}}><div>Learn more about DeCash at <a
          className="App-link"
          href="https://decash.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          decash.com
        </a> 💎</div><div>Start building with DeCash at <a
          className="App-link"
          href="https://docs.decash.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          docs.decash.com
        </a> 🔧</div></p>
      </header>
    </div>
  );
}

export default App;
