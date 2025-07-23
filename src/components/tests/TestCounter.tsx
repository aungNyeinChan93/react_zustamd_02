import React from "react";
import useCounterStore from "../../store/useCounterStore";

const TestCounter = () => {
  const { count, decrement, increment } = useCounterStore((store) => store);
  return (
    <React.Fragment>
      <section className="mx-auto w-full">
        <h2 className="w-1/6 p-4 text-center mx-auto text-2xl">{count}</h2>
        <button className="btn ms-2" type="button" onClick={increment}>
          +
        </button>
        <button className="btn ms-2" type="button" onClick={decrement}>
          -
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestCounter;
