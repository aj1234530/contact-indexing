import { useState } from "react";

function NewContactForm() {
  const [phone, setPhone] = useState(0);
  const [name, setName] = useState("");

  return (
    <form>
      <input
        placeholder="enter number"
        type="number"
        className="border"
        onChange={(e) => setPhone(parseInt(e.target.value))}
      ></input>
      <input
        placeholder="enter name"
        className="border"
        onChange={(e) => setName(e.target.value)}
      ></input>
    </form>
  );
}

export default NewContactForm;
