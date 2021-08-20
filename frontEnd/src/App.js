import React from 'react';
import IndexRouter from "./app/Routers/index.router";
import {Layout} from "antd";

function App() {
  return (
      <Layout style={{position:'absolute',left:0,right:0,bottom:0,top:0}}>
          <IndexRouter />
      </Layout>
  );
}

export default App;
