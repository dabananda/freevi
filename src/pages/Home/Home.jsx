import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Images from '../../components/images/Images';
import Search from '../../components/searchBar/Search';
// import Videos from '../../components/videos/Videos';
import ReactLoading from 'react-loading';
import './home.scss';
import Pagination from '../../components/pagination/Pagination';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('popular');
  const [images, setImages] = useState([]);
  // const [videos, setVideos] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleKeyword = () => {
    setKeyword(search);
    setSearch('');
  };

  const handlePageIncrese = () => {
    setpageNumber(pageNumber + 1);
  };

  const handlePageDecrese = () => {
    pageNumber > 1 ? setpageNumber(pageNumber - 1) : setpageNumber(1);
  };

  // fatching photos data from pexels api
  useEffect(() => {
    fetch(
      `https://api.pexels.com/v1/search/?page=${pageNumber}&per_page=15&query=${keyword}`,
      {
        headers: {
          Authorization:
            '563492ad6f9170000100000118208a20cbba44759f4b4e22ebf8e687',
        },
      }
    )
      .then(response => response.json())
      .then(
        data => {
          setIsLoaded(true);
          setImages(data.photos);
          console.log(data);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [keyword, pageNumber]);

  // fetching videos data from pexels
  // useEffect(() => {
  //   fetch(`https://api.pexels.com/videos/search?query=${keyword}`, {
  //     headers: {
  //       Authorization:
  //         '563492ad6f9170000100000118208a20cbba44759f4b4e22ebf8e687',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(
  //       data => {
  //         setIsLoaded(true);
  //         setVideos(data.videos);
  //       },
  //       error => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, [keyword]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loading">
        <ReactLoading type="bubbles" color="#0000FF" height={300} width={150} />
      </div>
    );
  } else {
    return (
      <div className="container">
        <Search
          handleChange={handleChange}
          handleKeyword={handleKeyword}
          search={search}
          keyword={keyword}
        />
        <Images images={images} keyword={keyword} />
        {/* <Videos videos={videos} /> */}
        <Pagination
          handlePageIncrese={handlePageIncrese}
          handlePageDecrese={handlePageDecrese}
        />
        <Footer />
      </div>
    );
  }
};

export default Home;
