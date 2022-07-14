//CREATED BY: HAMAAD YOUSAF 2022-07-05

import { useReducer, useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Table from "./components/Table";
import Main from "./components/Main";
import { insertion } from "./algorithms/insertion";
import { runQuick } from "./algorithms/quick";
import { runMerge } from "./algorithms/merge";
import { heapSort } from "./algorithms/heap";

function reducer(state, action) {
  switch (action.type) {
    case "Insertion Sort":
      return {
        title: "Insertion Sort",
        stats: "O(n)|O(n²)|O(n²)|O(1)",
        algo: insertion
      }
    case "Quick Sort":
      return {
        title: "Quick Sort",
        stats: "O(nlog(n))|O(nlog(n))|O(n²)|O(log(n))",
        algo: runQuick
      }
    case "Merge Sort":
      return {
        title: "Merge Sort",
        stats: "O(nlog(n))|O(nlog(n))|O(nlog(n))|O(n)",
        algo: runMerge
      }
    case "Heap Sort":
      return {
        title: "Heap Sort",
        stats: "O(nlog(n))|O(nlog(n))|O(nlog(n))|O(1)",
        algo: heapSort
      }
    default:
      return state
  }
}

function App() {
  const [{ title, stats, algo }, dispatch] = useReducer(reducer, {
    title: "Insertion Sort",
    stats: "O(n)|O(n²)|O(n²)|O(1)",
    algo: insertion
  })

  const [{ length, speed }, setState] = useState({
    length: 50,
    speed: 50
  })

  function change(newAlgo) {
    dispatch({ type: newAlgo })
  }

  function lengthChange(e) {
    setState({
      length: e.target.value,
      speed: speed
    })
  }

  function speedChange(e) {
    setState({
      length: length,
      speed: e.target.value
    })
  }

  return (
    <div className="container">
      <Header
        length={length}
        speed={speed}
        lengthChange={lengthChange}
        speedChange={speedChange}
      />
      <div className="content">
        <div className="side-container">
          <SideBar
            onClick={change}
          />
          <Table
            stats={stats}
          />
        </div>
        <div className="main-container">
          <Main
            title={title}
            algo={algo}
            length={length}
            speed={speed}
          />
        </div>
      </div>
    </div>
  );
}

export default App;


