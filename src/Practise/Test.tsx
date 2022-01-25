import { useState } from "react";

function Test() {
  const [state, setState] = useState("");

  return (
    <div>
      <input
        type="file"
        onChange={(e: any) => {
          setState(URL.createObjectURL(e.target.files[0]));
        }}
      />
      {console.log(state)}
      <img src={state} alt="photo" />
    </div>
  );
}

export default Test;
