import { Fragment } from 'react';

const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {

  const formatCount = () => {

    const { value } = counter;
    
    return value === 0 ? <h1> Zero </h1> : value;
  };

  return (
    <Fragment>
      <div className='flex m-3'>
        <span className={counter.value === 0 ? 'bg-yellow-500 rounded-md mr-3 p-2 text-sm text-center' : 'bg-blue-500 rounded-md mr-3 p-2 text-sm text-center text-white'}>
          {formatCount()}
        </span>

        <button
          type='button'
          className='border border-gray-500 rounded-md px-3 bg-gray-300'
          onClick={() => onIncrement(counter)}
        >
          Increment
        </button>

        {counter.value === 0 ? (
          <button
            disabled
            type='button'
            className='border border-gray-300 opacity-[0.5] cursor-not-allowed rounded-md px-3 bg-gray-300 ml-3'
            onClick={() => onDecrement(counter)}
          >
            Decrement
          </button>
        ) : (
          <button
            type='button'
            className='border border-gray-500 rounded-md px-3 bg-gray-300 ml-3'
            onClick={() => onDecrement(counter)}
          >
            Decrement
          </button>
        )}

        <button
          type='button'
          className='rounded-md px-3 bg-red-500 text-white ml-3'
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
      </div>
    </Fragment>
  );
};

export default Counter;