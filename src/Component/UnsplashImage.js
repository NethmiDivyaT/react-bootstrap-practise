import React, { useState, useEffect } from 'react';
import { Loader } from './Loader';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../Styles/Unsplash.css';

import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;


function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    
    axios
      .get(`https://mocki.io/v1/f3e9dca4-e44d-409a-a66a-5675f6fc481b?&_limit=20`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }


  return (
    <div>
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
         <div class="img">
        {images.map(image => (
            <img src={image.url} height="250px" width="250px" />
        ))}
          </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;