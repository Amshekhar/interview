import React, { useState } from 'react';

function ValidationForm() {
    const [userName, setUsername] = useState('');   
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const handleFormValidation = (e) => {
        e.preventDefault();
        let validationMessage = '';

        if (userName.length >= 3) {
            console.log("Username is ok");
        } else {
            validationMessage += "Username must be at least 3 characters long.\n";
        }

        if (password.length >= 6) {
            console.log("Password is ok");
        } else {
            validationMessage += "Password must be at least 6 characters long.\n";
        }

        if (validationMessage) {
            setError(validationMessage);  
        } else {
            setError('');  
            console.log("Form submitted successfully!");
        }
    };

    return (
        <>
            <h2>Validation Form</h2>
            <form onSubmit={handleFormValidation}>
                <label>Enter Username:</label>
                <input onChange={usernameHandler} value={userName} type='text' />
                <br />
                <label>Enter Password:</label>
                <input onChange={passwordHandler} value={password} type='password' />
                <br />
                <button type='submit'>Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
}

export default ValidationForm;
