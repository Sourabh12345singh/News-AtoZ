import React, { useEffect, useState } from "react";
import Newspart from "./Newspart";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = (props) => {
  const [articles, setArticles] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [page, setPage] = useState(1); 
  const [results, setResults] = useState(0); 

  
  useEffect(() => {
    const fetchInitialArticles = async () => {
      props.setProgress(10);
      await fetchArticles();
      props.setProgress(100);
    };
    fetchInitialArticles();
  }, []); 

  // Fetch articles from the API
  const fetchArticles = async () => {
    const { country, category } = props;

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${props.apikey}&page=${page}&pageSize=15`;

    setLoading(true);
    let data = await fetch(url);
    let maindata = await data.json();

    setArticles((prevArticles) => [...prevArticles, ...maindata.articles]);
    setResults(maindata.totalResults);
    setLoading(false);
  };

  // Fetch more data for InfiniteScroll
  const fetchMoreData = async () => {
    setPage((prevPage) => prevPage + 1);
    await fetchArticles();
  };

  return (
    <div className="container my-4">
     <h1 style={{ marginTop: "90px" }} className="text-center mb-4">
        US Today's Headlines
      </h1>

      {/* InfiniteScroll Component */}
      <InfiniteScroll
        dataLength={articles.length} // Current number of articles
        next={fetchMoreData} // Function to fetch more data
        hasMore={articles.length < results} // Check if more articles are available
        loader={<Spinner />} // Loader component
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>You've reached the end!</b>
          </p>
        }
      >
        <div className="row d-flex justify-content-center">
          {articles.map((element) => {
            return (
              <div
                className="col-md-4 mb-4 d-flex align-items-stretch"
                key={element.url}
              >
                <Newspart
                  title={element.title}
                  discription={element.description}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

// Default Props
Main.defaultProps = {
  country: "us",
  category: "general",
};

// PropTypes
Main.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired, // Ensure setProgress is passed as a prop
};

export default Main;
