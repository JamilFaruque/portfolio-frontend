
import Button from "../../components/Button";
import { useState } from "react";

const Verify = () => {
  const [error, setError] = useState(null);
  const [code, setCode] = useState(null);

  const submit = () => {
    if (!code) {
      setError("Please enter security code");
    } else {
      const res = fetch("/api/authenticate", {
        body: JSON.stringify({code}),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-28">Please Enter Security Code</h1>
      <div className="w-[500px] mx-auto">
        <input placeholder="Security Code" onChange={(e) => setCode(e.target.value)}  type="text" className="w-full h-12 mx-auto mt-10 border outline-none p-4 rounded-lg "/>
      </div>
      <Button
        classes={"!mx-auto !mt-10 w-[200px] bg-black flex items-center justify-center text-white hover:text-black"}
        onClick={submit}
      >Submit</Button>
      {error && <p className="text-red-500 text-center mt-10">{error}</p>}
    </div>
  );
};

export default Verify;