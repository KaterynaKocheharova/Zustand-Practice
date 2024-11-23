import { useCounterStore } from "../../store";

const Counter = () => {
  const count = useCounterStore((store) => store.count);
  const increment = useCounterStore((store) => store.increment);
  const decrement = useCounterStore((store) => store.decrement);
  const incrementAsync = useCounterStore((store) => store.incrementAsync);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Increment Async</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
