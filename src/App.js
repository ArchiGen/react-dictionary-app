import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary />
      </header>
      <footer>
        Dictionary app is{" "}
        <a
          href="https://github.com/ArchiGen/react-dictionary-app"
          className="Github"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        and it was coded by{" "}
        <a
          href="https://github.com/ArchiGen/"
          className="Github"
          target="_blank"
          rel="noreferrer"
        >
          ArchiGen
        </a>
      </footer>
    </div>
  );
}

export default App;
