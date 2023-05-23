import "./styles/QuoteBox.css";

const QuoteBox = ({ phrase, handleChangeQuote }) => {
  return (
    <div className="quoteBox__container">
      <button className="quoteBox__btn" onClick={handleChangeQuote}>
        Try your luck
      </button>

      <section className="quoteBox">
        <article className="quoteBox__phrase">
          <p>{phrase}</p>
        </article>
      </section>
    </div>
  );
};

export default QuoteBox;
