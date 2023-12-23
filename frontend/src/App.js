import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Flask backend when the component mounts
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/message`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>React Frontend</h1>
      <p>Message from Flask Backend: {message}</p>
    </div>
  );
}

export default App;
