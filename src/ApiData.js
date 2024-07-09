// src/ApiData.js
import React, { useState, useEffect } from 'react';

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/items'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
      {data.map(item => (
          <li key={item._id}>
            <h3>{item.title}</h3>
            <p><strong>Insight:</strong> {item.insight}</p>
            <p><strong>Topic:</strong> {item.topic}</p>
            <p><strong>Sector:</strong> {item.sector}</p>
            <p><strong>Source:</strong> {item.source}</p>
            <p><strong>Published:</strong> {item.published}</p>
            <p><strong>Intensity:</strong> {item.intensity}</p>
            <p><strong>Relevance:</strong> {item.relevance}</p>
            <p><strong>Likelihood:</strong> {item.likelihood}</p>
            <p><strong>Region:</strong> {item.region}</p>
            <p><strong>Start Year:</strong> {item.start_year}</p>
            <p><strong>End Year:</strong> {item.end_year}</p>
            <p><strong>Impact:</strong> {item.impact}</p>
            <p><strong>Country:</strong> {item.country}</p>
            <p><strong>Added:</strong> {item.added}</p>
            <p><strong>URL:</strong> <a href={item.url}>{item.url}</a></p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;