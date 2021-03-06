export default ({reviews}) => {
    return (
    <div className="reviews-component">
        <ul>
        {reviews && reviews.map((review, index) => 
            <li key={index}>
                <q>{review.quote}</q>
                {` - `}
                <span>{review.author}</span>
            </li>
        )}
        </ul>
        <style jsx>{`
            .reviews-component {
                padding: 0 1rem;
            }
        `}</style>
    </div>
    )
}