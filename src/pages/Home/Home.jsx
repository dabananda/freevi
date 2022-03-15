import React, { useState, useEffect } from 'react';
import Images from '../../components/images/Images';
import Search from '../../components/searchBar/Search';
import './home.scss';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleKeyword = () => {
    setKeyword(search);
  };

  // fatching data from pexels api
  useEffect(() => {
    fetch('https://api.pexels.com/v1/search?query=city', {
      headers: {
        Authorization:
          '563492ad6f9170000100000118208a20cbba44759f4b4e22ebf8e687',
      },
    })
      .then(response => response.json())
      .then(
        data => {
          setIsLoaded(true);
          setImages(data.photos);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Please wait. Data is loading...</div>;
  } else {
    return (
      <div className="container pb-5">
        <Search
          handleChange={handleChange}
          handleKeyword={handleKeyword}
          search={search}
          keyword={keyword}
        />
        <Images images={images} />
      </div>
    );
  }
};

export default Home;
