function App(props) {
  const subject = props.subject;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, {subject}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
