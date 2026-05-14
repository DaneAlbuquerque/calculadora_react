
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
  setCurrentNumber((prev) => {
    if (prev === "0") {
      return num;
    }

    return prev + num;
  });
};

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultiplication();
          break;
        case "/":
          handleDivision();
          break;

        default:
          break;
      }
    }
    };

 const handleMultiplication = () => {
      if (firstNumber === "0") {
        setFirstNumber(String(currentNumber));
        setCurrentNumber("0");
        setOperation("*");
      } else {
        const multiplication = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(multiplication));
        setOperation("");
      }
    };

  const handleDivision = () => {
  if (firstNumber === "0") {
    setFirstNumber(String(currentNumber));
    setCurrentNumber("0");
    setOperation("/");
  } else {
    const division = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(division));
    setOperation("");
  }
};

  const handlePercentage = () => {
  const percentage = Number(currentNumber) / 100;
  setCurrentNumber(String(percentage));
};
  
  return (
    <div className="bg-zinc-950 h-screen flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-3xl shadow-2xl w-80">
        
       <input
         type="text"
         value={currentNumber}
         readOnly
         className="w-full mb-4 bg-zinc-800 text-white text-right text-4xl p-4 rounded-2xl"
/>

        <div className="grid grid-cols-4 gap-3">

          <button onClick={handleOnClear} className="bg-orange-500 text-white p-4 rounded-2xl">C</button>
          <button onClick={handlePercentage} className="bg-orange-500 text-white p-4 rounded-2xl">%</button>
          <button onClick={handleDivision} className="bg-orange-500 text-white p-4 rounded-2xl">/</button>
          <button onClick={handleMultiplication} className="bg-orange-500 text-white p-4 rounded-2xl">x</button>
     
          <button onClick={() => handleAddNumber("7")} className="bg-zinc-700 text-white p-4 rounded-2xl">7</button>
          <button onClick={() => handleAddNumber("8")} className="bg-zinc-700 text-white p-4 rounded-2xl">8</button>
          <button onClick={() => handleAddNumber("9")} className="bg-zinc-700 text-white p-4 rounded-2xl">9</button>
          <button onClick={handleMinusNumbers} className="bg-orange-500 text-white p-4 rounded-2xl">-</button>

          <button onClick={() => handleAddNumber("4")} className="bg-zinc-700 text-white p-4 rounded-2xl">4</button>
          <button onClick={() => handleAddNumber("5")} className="bg-zinc-700 text-white p-4 rounded-2xl">5</button>
          <button onClick={() => handleAddNumber("6")} className="bg-zinc-700 text-white p-4 rounded-2xl">6</button>
          <button onClick={handleSumNumbers} className="bg-orange-500 text-white p-4 rounded-2xl">+</button>

         <button onClick={() => handleAddNumber("1")} className="bg-zinc-700 text-white p-4 rounded-2xl">1</button>
         <button onClick={() => handleAddNumber("2")} className="bg-zinc-700 text-white p-4 rounded-2xl">2</button>
         <button onClick={() => handleAddNumber("3")} className="bg-zinc-700 text-white p-4 rounded-2xl">3</button>
        <button onClick={handleEquals} className="bg-orange-500 text-white p-4 rounded-2xl">=</button>

        <button onClick={() => handleAddNumber("0")} className="bg-zinc-700 text-white p-4 rounded-2xl col-span-4">0</button>
          
        </div>
      </div>
    </div>
    );
};

export default App;
