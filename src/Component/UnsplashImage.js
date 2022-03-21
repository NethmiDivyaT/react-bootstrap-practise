import React, { useState, useEffect } from 'react';
import { Loader } from './Loader';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import styled from 'styled-components';
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

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
  transition: transform 0.4s;
`;

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    
    axios
      .get(`http://localhost:3000/posts?&_limit=20`)
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
         <WrapperImages>
        {images.map(image => (
            <img src={image.url} height="250px" width="250px" />
        ))}
          </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;