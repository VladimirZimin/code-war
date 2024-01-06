// import task from "./tasks/task-4";

import { Counter } from "./ReactTest";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontWeight: "700",
          fontSize: "35px",
        }}
      >
        <p>CODEWAR</p>

        <div>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
