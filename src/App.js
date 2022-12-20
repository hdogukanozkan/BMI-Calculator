import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [bmi, setBmi] = useState();
  const [health, setHealth] = useState();

  useEffect(() => {
    if (bmi > 18.5 && bmi < 25) {
      setHealth("Normal");
    } else if (bmi > 25 && bmi < 30) {
      setHealth("Over Weight");
    } else if (bmi < 18.5) {
      setHealth("Under Weight");
    } else if (bmi > 30) {
      setHealth("Obsede");
    }
  }, [bmi]);

  const handleCalculate = (e) => {
    if (e.target[0].value === "" || e.target[1].value === "") {
      toast.error("Please enter your weight and height...");
    } else {
      let weight = e.target[0].value;
      let height = e.target[1].value / 100;

      setBmi(weight / (height * height));
      e.target[0].value = "";
      e.target[1].value = "";
    }
    e.preventDefault();
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="bg-slate-800 w-full sm:w-[650px] mx-auto rounded-lg bg-opacity-90">
        <h1 className="text-4xl pt-6 pb-14 text-center font-semibold font-bold">
          BMI Calculator
        </h1>
        <form onSubmit={(e) => handleCalculate(e)}>
          <div className="flex gap-4 w-full px-4 sm:px-0 items-center justify-center  mb-4">
            <p className="w-24">Weight (kg)</p>
            <input
              type="number"
              placeholder="70"
              className="text-black px-2 py-2 rounded-md sm:flex-none flex-auto outline-none"
            />
          </div>
          <div className="flex gap-4 w-full px-4 sm:px-0 items-center justify-center mb-4">
            <p className="w-24">Height (cm)</p>
            <input
              type="number"
              placeholder="170"
              className="text-black px-2 py-2 rounded-md sm:flex-none flex-auto outline-none"
            />
          </div>
          <div className="w-full flex justify-center gap-4">
            <button
              type="submit"
              className="bg-blue-600 py-2 px-5 rounded-md hover:bg-blue-500 transition active:scale-110"
            >
              CALCULATE
            </button>
            <button
              type="reset"
              className="bg-red-600 py-2 px-10 rounded-md hover:bg-red-500 transition active:scale-110"
            >
              RESET
            </button>
          </div>
        </form>
        <div className="flex justify-center pt-4 font-semibold  font-bold text-xl">
          {bmi ? bmi.toFixed(2) : "25.00"}
        </div>
        <div className="flex justify-center py-3 font-semibold text-center font-bold text-xl ">
          {health ? health : "Please enter your weight and height...."}
        </div>
        <div className="w-full px-4 py-7 flex">
          <div className="flex-1 text-center bg-blue-700 py-4  flex items-center justify-center flex-col gap-1 rounded-tl-md rounded-bl-md">
            <p>Under Weight</p>
            <p> &lt; 185</p>
          </div>
          <div className="flex-1 text-center bg-green-700 py-4 items-center justify-center flex flex-col gap-1">
            <p>Normal</p>
            <p> 18.5-25</p>
          </div>
          <div className="flex-1 text-center bg-orange-700 py-4 items-center justify-center flex flex-col gap-1">
            <p>Over Weight</p>
            <p> 25-30</p>
          </div>
          <div className="flex-1 text-center bg-red-700 py-4 rounded-tr-md rounded-br-md items-center justify-center flex flex-col gap-1">
            <p>Obsede</p>
            <p> &gt; 30</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
