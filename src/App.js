import Home from './pages/Home';
import Favorites from './pages/Favorites'

import { GlobalStyle } from './components/GlobalStyle' 
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { useState, useEffect } from 'react';

function App() {

  const [currentQuote, setCurrentQuote] = useState({})
  const [favorites, setFavorites] = useState((JSON.parse(localStorage.getItem('items')) || []))
  const [currentID, setCurrentID] = useState(JSON.parse(localStorage.getItem('id')) || 1)

  

  async function getRandomQuote() {
    const randomNumberQuote = Math.floor(Math.random() * 1643)
    const response = await fetch('https://type.fit/api/quotes')
    const responseData = await response.json()
    
    setCurrentQuote({
      author: (responseData[randomNumberQuote].author || 'Unknown'),
      text: responseData[randomNumberQuote].text
    })
  }
  
  
  function setAsFavorite(author, text) {
    const quote = {
      author: author,
      text: text,
      id: currentID
    }

    setCurrentID(prev => {
      localStorage.setItem('id', prev+1)
      return prev+1
    })

    setFavorites(prev => {
      localStorage.setItem('items', JSON.stringify([...prev, quote]))
      return [...prev, quote]
    })

  }

  function removeFavorite(id) {
    setFavorites(prev => {
      const newArray = prev.filter(quote => quote.id !== id)
      localStorage.setItem('items', JSON.stringify(newArray))
      return newArray
    })
  }

  useEffect(() => {
    getRandomQuote()
  }, [])

  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home 
              getRandomQuote={getRandomQuote}
              setAsFavorite={ () => setAsFavorite((currentQuote.author), currentQuote.text) }
              currentQuote={currentQuote}
            />
          </Route>

          <Route path="/favorites">
            <Favorites quotesArray={favorites} removeFavorite={removeFavorite}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App