import React, { useEffect, useState } from "react";

const DailyQuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      let response = await fetch("https://dummyjson.com/quotes/random");
      let data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();

    const intervalId = setInterval(() => {
      fetchQuote();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  function getNewQuote() {
    fetchQuote();
    console.log("click");
  }

  return (
    <>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <div>
          <p>{quote?.quote}</p>
          <h3>{quote?.author}</h3>
          <button onClick={getNewQuote}>Get New Quote</button>
        </div>
      )}
    </>
  );
};

export default DailyQuoteGenerator;
