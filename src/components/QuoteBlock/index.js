import { QuoteContainer,
    QuoteText,
    QuoteAutor,
    SaveQuote,
    ButtonNewQuote,
    WrapperButton,
} from "./style"

function QuoteBlock({quoteAuthor, quoteText, getRandomQuote, setAsFavorite}) {
    return (
        <QuoteContainer>
            <QuoteAutor>{quoteAuthor}</QuoteAutor>
            <QuoteText>{quoteText}</QuoteText>

            <WrapperButton>
                <SaveQuote onClick={setAsFavorite}>Favorite</SaveQuote>
                <ButtonNewQuote onClick={getRandomQuote}>New Quote</ButtonNewQuote>
            </WrapperButton>

        </QuoteContainer>
    )
}

export default QuoteBlock