

const Counter = ({count,increment,decrement}:any) => {


  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg w-64">
      <p className="text-lg font-semibold mb-4 text-red-400">
        Count: <span className="text-blue-600">{count}</span>
      </p>

      <div className="flex gap-3">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition cursor-pointer"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
