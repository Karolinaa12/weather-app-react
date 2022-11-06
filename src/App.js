import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          <p>
            This project was created by Karolina and is{" "}
            <a
              href="https://github.com/Karolinaa12/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github{" "}
            </a>
            and hosted on{" "}
            <a
              href="https://app.netlify.com/sites/tangerine-pika-cc0fad/overview"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
