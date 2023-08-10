import { useState, useEffect } from 'react';
import './quote.css';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    let isMountd = true;
    const API_KEY = 'RdZd0Xsx4bF/bK+ewY35lg==Gp1zeP14QV1BrS8W';

    const fitchQuotes = async () => {
      const res = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=inspirational',
        {
          headers: { 'X-Api-Key': API_KEY },
          contentType: 'application/json',
        },
      );

      if (!res.ok) {
        throw Error("Couldn't retrieve data");
      }
      return res.json();
    };

    fitchQuotes()
      .then((data) => {
        if (isMountd) {
          setQuote(data[0].quote);
          setAuthor(data[0].author);
          setLoading(false);
          setErrMsg(null);
        }
      })
      .catch((err) => {
        if (isMountd) {
          setQuote(null);
          setAuthor(null);
          setLoading(false);
          setErrMsg(err.message);
        }
      });
    return () => {
      isMountd = false;
    };
  }, []);

  return (
    <div className="quote">
      {loading && <div>Loading...</div>}
      {quote && (
      <div>{quote}</div>
      )}
      {author && (
      <div>
        <span>By : </span>
        {author}
      </div>
      )}
      {errMsg && <div>{errMsg}</div>}
    </div>
  );
}
export default Quote;
