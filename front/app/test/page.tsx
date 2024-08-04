"use client"

import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [getData, setGetData] = useState(null);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    // GET request
    fetch('http://localhost:1000/locations.php')
      .then(response => response.json())
      .then(data => setGetData(data))
      .catch(error => console.error('Error with GET request:', error));
  }, []);

  const handlePostRequest = () => {
    fetch('http://localhost:1000/locations.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: 'Hello from Next.js' }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setPostData(data))
      .catch(error => console.error('Error with POST request:', error));
  };

  return (
    <div>
      <h1>GET Request</h1>
      {getData ? <pre>{JSON.stringify(getData, null, 2)}</pre> : 'Loading...'}

      <h1>POST Request</h1>
      <button onClick={handlePostRequest}>Send POST Request</button>
      {postData ? <pre>{JSON.stringify(postData, null, 2)}</pre> : null}
    </div>
  );
};

export default MyComponent;
