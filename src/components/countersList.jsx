import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {

  const [counters, setCounters] = useState([
    
    { id: 1, value: 40 },
    
    { id: 2, value: 0 },
    
    { id: 3, value: 0 },
    
    { id: 4, value: 0 },
  ]);

  const handleIncrement = (counter) => {
    const newCounters = counters.map((c) => {
      if (c.id === counter.id) {
        return { ...c, value: c.value + 1 };
      }
  
      return c;
    });
  
    setCounters(newCounters);
  };

  const handleDecrement = (counter) => {
    const newCounters = counters.map((c) => {
      if (c.id === counter.id) {
        return { ...c, value: c.value - 1 };
      }
  
      return c;
    });
  
    setCounters(newCounters);
  };

  const handleReset = () => {
    const newCounters = counters.map((c) => {
      return { ...c, value: 0 };
    });
  
    setCounters(newCounters);
  };

  const handleDelete = (counterId) => {
  
    const newCounters = counters.filter((c) => c.id !== counterId);
  
    setCounters(newCounters);
  };

  return (
    <>
      <button
        type='button'
        className='rounded-md px-3 py-2 bg-blue-600 text-white m-3'
        onClick={handleReset}
      >
        Reset Counters
      </button>

      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
    </>
  );
};

export default CountersList;