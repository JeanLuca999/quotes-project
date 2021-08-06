import Header from "../components/Header/index";
import QuoteBlock from "../components/QuoteBlock";

function Home({getRandomQuote, setAsFavorite, currentQuote}) {

  return (
    <>
      <Header toHome={true} toFavorites={false} />
      <main>
        <QuoteBlock
          getRandomQuote={getRandomQuote} 
          setAsFavorite={setAsFavorite}
          quoteAuthor={currentQuote.author} 
          quoteText={currentQuote.text}
          />
      </main>
    </>
  )
}

export default Home;
