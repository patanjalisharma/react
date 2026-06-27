import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log("form submitted");
    setName("")
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
