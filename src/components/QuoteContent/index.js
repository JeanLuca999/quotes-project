import { DeleteQuote, Name, QuoteWrapper, Text } from "./style";

function QuoteContent({author, text,id, removeFavorite}) {

    return (
        <QuoteWrapper>
            <Name>
                {author}
            </Name>
            <Text>
                {text}
            </Text>
            <DeleteQuote onClick={() => removeFavorite(id)}>Delete</DeleteQuote>
        </QuoteWrapper>
    )
}

export default QuoteContent