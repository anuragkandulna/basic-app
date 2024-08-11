import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Age: ${age}`);
    // Here, you would typically send the data to the back end via an API call
    // For example, using fetch or axios to POST data

    const user = { name, age };

    try {
        const response = await fetch('http://127.0.0.1:5000/api/submit', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        const data = await response.json();
        if (data.status === 'success') {
            alert(`User ${data.name} (Age: ${data.age}) was submitted successfully!`);
        } else {
            alert('There was an error submitting the user data.');
        }
        
    } catch (error) {
        console.error('Error:', error);
    }

  };

  return (
    <div className="max-w-xs mx-auto p-5 border border-gray-300 rounded-lg">
    <h2>User Form</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-2.5">
        <label>Name:</label>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
        />
        </div>
        <div className="mb-2.5">
        <label>Age:</label>
        <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
        />
        </div>
        <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded"
        >
        Submit
        </button>
    </form>
    </div>
  );
}

export default Form;