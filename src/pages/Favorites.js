import Header from '../components/Header/index'
import QuoteContent from '../components/QuoteContent';
import { Grid } from '../components/QuoteContent/style';

function Favorites({quotesArray, removeFavorite}) {

    return (
        <>
            <Header toHome={false} toFavorites={true} />
            <Grid>
            {
                quotesArray.length > 0 ? quotesArray.map( (e, index) => 
                <QuoteContent
                    key={index}
                    author={e.author}
                    text={e.text}
                    id={e.id}
                    removeFavorite={removeFavorite}
                />)
                :
                <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginTop: '32px'}}>You Don't Have Any Favorite Quote</h2>
            }
            </Grid>
        </>
    )
}

export default Favorites;