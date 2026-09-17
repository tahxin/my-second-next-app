"use client";

import React from 'react';

interface CounterProps {
    initialCount: number;
}

const Counter = ({ initialCount }: CounterProps) => {
    const [count, setCount] = React.useState(initialCount);

    console.log("Hello from the Counter component!");

    const handleClick = () => {
        console.log("Button clicked!");
        setCount(count + 1);
    };

    return (
        <div>
            <h2 className='text-4xl'>Counter</h2>
            <p className='text-2xl'>Count: {count}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Counter;