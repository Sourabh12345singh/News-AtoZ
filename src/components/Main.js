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

  // Fetch articles from the API
  const fetchArticles = async (pageNum) => {
    const { country, category } = props;

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${props.apikey}&page=${pageNum}&pageSize=15`;

    setLoading(true);
    try {
      let data = await fetch(url);
      let maindata = await data.json();

      // Check for API errors
      if (maindata.status === "error") {
        console.error("API Error:", maindata.message);
        setArticles([]);
        setResults(0);
      } else {
        setArticles((prevArticles) => [
          ...prevArticles,
          ...(maindata.articles || []),
        ]);
        setResults(maindata.totalResults || 0);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setArticles([]);
      setResults(0);
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchInitialArticles = async () => {
      props.setProgress(10);
      setArticles([]);
      setPage(1);
      await fetchArticles(1);
      props.setProgress(100);
    };
    fetchInitialArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category]);

  // Fetch more data for InfiniteScroll
  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    await fetchArticles(nextPage);
  };

  return (
    <div className="news-container">
      <h1 className="news-heading">US Today's Headlines</h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < results}
        loader={
          <div className="loading-spinner">
            <Spinner />
          </div>
        }
        endMessage={
          <div className="end-message">
            <p>You've reached the end!</p>
          </div>
        }
      >
        <div className="news-grid">
          {articles.map((article) => (
            <Newspart
              key={article.url}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              newsUrl={article.url}
            />
          ))}
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
