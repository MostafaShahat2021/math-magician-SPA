import { useState, useEffect } from 'react';
import './quote.css';

function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fitchQuotes = async () => {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=hope', {
        headers: { 'X-Api-Key': 'RdZd0Xsx4bF/bK+ewY35lg==Gp1zeP14QV1BrS8W' },
        contentType: 'application/json',
      });

      if (!res.ok) {
        throw Error("Couldn't retrieve data");
      }
      return res.json();
    };

    fitchQuotes().then((data) => {
      setQuote(data[0].quote);
      // console.log(quote);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="quote">
      {quote && <div>{quote}</div>}
    </div>
  );
}
export default Quote;
