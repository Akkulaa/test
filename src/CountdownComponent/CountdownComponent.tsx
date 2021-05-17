import React, { MutableRefObject, useEffect, useState } from "react";
import "../css/TestComponent.css";

export interface CountdownComponentProps {
  nb: number;
  onDone: () => void;
}

const CountdownComponent: React.FC<CountdownComponentProps> = ({
  nb,
  onDone,
}: CountdownComponentProps) => {
  const counterRef: MutableRefObject<NodeJS.Timeout> = React.useRef(
    0 as unknown as NodeJS.Timeout
  );
  const initialCount = 30;
  const [count, setCount] = useState<number>(initialCount);
  const actualCount = React.useRef(initialCount)

  const resetCounter = (initial: number) => {
    clearInterval(counterRef.current);
    setCount(() => initial);
  };

  const countdown = () => {
    if (actualCount.current <= 0) {
      resetCounter(0);
      onDone();
    } else {
      setCount((c:number) => {
        actualCount.current = c - 1
        return actualCount.current
      });
    }
  };
  const startTimer = () => {
    counterRef.current = setInterval(countdown, 1000);
  };
  useEffect(() => {
    resetCounter(initialCount);
    startTimer();
    return () => clearInterval(counterRef.current)
  }, [nb]);

  return <p id="count_id" className="value">{count}s</p>;
};

export default CountdownComponent;
