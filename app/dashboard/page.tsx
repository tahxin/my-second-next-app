import React from 'react';
import Counter from '../components/counter';

const DashboardPage = () => {

    console.log("Hello from the Dashboard page!");


    return (
        <div>
            <h2>Welcome to the Dashboard</h2>
            <ul>
                <li>Name</li>
                <li>Job</li>
                <li>Role</li>
            </ul>
            <p>This is a paragraph in the Dashboard.</p>
            <p>The current count is: 0</p>
            <Counter initialCount={0} />
        </div>
    );
};

export default DashboardPage;