import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter";

// 변수 선언
const areYouCool: boolean = true;
const answer: number = 42;
const typescript: string = "great";
const greetings: string = `
Hello, Readers!
Welcome to TypeScript.
`;
const hasType: Object = {
  TypeScript: true,
  JavaScript: false,
};

// 배열 선언
const pibonacci: Array<number> = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
const myFavoriteBeers: Array<string> = [
  "Imperial Stout",
  "India Pale Ale",
  "Weizenbock",
];

// 튜플
const nameAndHeight: [string, number] = ["안희종", 176];

// 객체
const user: { name: string; height: number } = { name: "안희종", height: 176 };

function App() {
  // method
  function sum(a: number, b: number): number {
    return a + b;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greetings}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {typescript}, {pibonacci[0]}
        </a>
      </header>
      <Counter />
    </div>
  );
}

export default App;
