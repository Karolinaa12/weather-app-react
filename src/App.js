import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            This project was created by Karolina and is{" "}
            <a
              href="https://github.com/Karolinaa12/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
