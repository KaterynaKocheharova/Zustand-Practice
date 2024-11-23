import { useCounterStore } from "../../store";

// USING USE COUNTER STORE OUTSIDE THE COMPONENT

const logCount = () => {
  console.log(useCounterStore)
  const count = useCounterStore.getState().count;
  console.log(count);
};

logCount()

const Counter = () => {
  // another way to access the store
  // hook returns the store when invoked
  // returns all store object at once, probably not good for performance
  // const { increment, decrement, incrementAsync, count } = useCounterStore();

  // returns only a part of the store, component will rerender only if this part changes, so
  // it's better for optimization
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
