"use client";

import React, { useState } from 'react';

interface CounterProps {
    initialCount: number;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;

}

const Counter = (props: CounterProps) => {
    const [] = React.useState(0);
    const [count, setCount] = React.useState(0);

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