useEffect(() => {
  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=9fb8d4d606404879ab28d38b4cf2dbb2&q=${searchTerm}`
      );
      const data = await response.json();
      const filteredData = data.articles.filter((news) => {
        news.title.toLowerCase() !== "[removed]";
        news.urlToImage !== null;
      });
      const formattedData = filteredData.map((news) => ({
        title: news.title,
        description: news.description,
        urlToImage: news.urlToImage,
        publishedAt: news.publishedAt,
        source: news.source,
      }));
      setMainNews(formattedData.slice(0, 1));
      setNewsData(formattedData.slice(1));
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
});
