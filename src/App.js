import './App.css';
import React from 'react';
import axios from 'axios';
import { TagCloud } from 'react-tagcloud';

function App() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3001/cloud').then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div className='CloudContainer'>
      <TagCloud
        className='Cloud'
        minSize={12}
        maxSize={35}
        tags={
          post.map(item => ({
            value: item.wordcontent,
            count: item.amount,
          }))
        }
      />
    </div>
  );

}

export default App;
