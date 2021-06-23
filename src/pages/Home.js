import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div>
      Home
      <button onClick={()=>history.goBack()}>Go Back</button>
    </div>
  );
}

export default Home;
