import React from 'react';
import IndexRouter from "./app/Routers/index.router";
import {Layout} from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Layout>
            <IndexRouter />
        </Layout>
    </div>
  );
}

export default App;
