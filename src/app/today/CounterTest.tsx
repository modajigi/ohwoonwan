"use client";

import useStore from "@/store/store";

const Counter = () => {
  const { count, increment, decrement } = useStore();
  return (
    <>
      <h1 className="text-2xl font-bold text-center text-black-800">
        Count: {count}
      </h1>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={increment}
          className=" text-white font-bold py-2 px-4 rounded"
        >
          증가
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          감소
        </button>
      </div>
    </>
  );
};

export default Counter;
