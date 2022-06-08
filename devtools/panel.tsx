import { render, MountableElement } from "solid-js/web";
import { onCleanup, createSignal } from "solid-js";

import "./global.css";

const CountingComponent = () => {
  const [count, setCount] = createSignal(0);
  const interval = setInterval(() => setCount((count) => count + 1), 1000);
  onCleanup(() => clearInterval(interval));
  return <div class="text-gray-500">Count value is {count()}</div>;
};

render(
  () => <CountingComponent />,
  document.getElementById("root") as MountableElement
);
