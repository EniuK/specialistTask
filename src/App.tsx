import React, { useEffect, useState } from "react";
import datas from "./modules/specialistsData.json";
import Main from "./components/main";
function App() {
  const [data, setData] = useState<any[]>([]);

  console.log(datas);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
