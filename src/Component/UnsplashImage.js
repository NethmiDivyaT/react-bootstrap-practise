import React from "react";
import { Loader } from "react-bootstrap-typeahead";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import '../Styles/Gallery.css';

  const UnsplashImage = ({ url, key }) => (
    <div className="image-item" key={key} >
      <img src={url} />
    </div>
  );
  

  let Collage = () => {
    const [images, setImages] = React.useState([]);
    const [loaded, setIsLoaded] = React.useState(false);
  
    React.useEffect(() => {
      fetchImages();
    }, []);
  
    const fetchImages = (count = 10) => {
      const apiRoot = "https://api.unsplash.com";
      const accessKey =
        "ffTaIG8uGsVZfSrdUp7kArv89BzN3U8q0VAQzPRZDis";
  
      axios
        .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
        .then(res => {
          setImages([...images, ...res.data]);
          setIsLoaded(true);
  
          console.log(images);
        });
    };
  
    return (
      <div className="hero is-fullheight is-bold is-info">
        <div className="hero-body">
          <div className="container">
  
            <InfiniteScroll
              dataLength={images}
              next={() => fetchImages(5)}
              hasMore={true}
              loader={
                <Loader
                />
              }
            >
              <div className="image-grid" style={{ marginTop: "30px" }}>
                {loaded
                  ? images.map((image, index) => (
                      <UnsplashImage
                        url={image.urls.regular}
                        key={index}
                      />
                    ))
                  : ""}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
  };
  
render(<Collage />, document.getElementById("root"));
  
