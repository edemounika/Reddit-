
import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

function RemoteJsonData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Reddit posts when the component mounts
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && data.data.children) {
          setPosts(data.data.children);
          setLoading(false);
        } else {
          console.error('No data or invalid data received from the Reddit API.');
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching data from the Reddit API:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* <h1>Reddit Posts</h1> */}
      <h1 className="custom-heading">******** Reddit Posts *********</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="maincard">
          {posts.map((post) => (
            <div className="post-card" key={post.data.id}>
              <h2 className="post-title"> {post.data.title}</h2>
              <h3>Selftext:</h3>
              <p className="post-text"> {post.data.selftext_html}</p>
              <div className="post-details">
                <h3>Score: {post.data.score}</h3>
                
                <a
                  href={post.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="post-link"
                >
                  {/* Read More */}
                  <p className='urllink'>url:{post.data.url} click Me </p> 
                  
                </a>
                
                
              </div>
            </div>
            
          ))}
        </div>
      )}
    </div>
    
  );
}

export default RemoteJsonData;


