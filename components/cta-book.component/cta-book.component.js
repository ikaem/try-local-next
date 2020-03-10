export default () => {
    return (
    <div className="cta-book-component">
        <h2>Try it?</h2>
        <form className="cta-book-form">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>
            <label htmlFor="date">Arrival Date</label>
            <input type="datetime-local" name="date" id="date"/>
            <label htmlFor="people">Number of People</label>
            <input type="number" name="people" id="people" min="1"/>
            <textarea defaultValue="need are for message too" />
            <button className="cta-book-button">Book</button>
        </form>
        <style jsx>{`
            .cta-book-component {
                background-color: var(--firstColor);
                padding: 0.7rem 1rem 1rem;
            }
            .cta-book-component > h2 {
                color: var(--thirdColor);
                font-size: 1.1rem;
                margin-bottom: 0.3rem;
            }
            .cta-book-form {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.3rem;
                color: white;
            }
            .cta-book-form input {
                border: none;
                border-radius: 0.1rem;
                padding: 0.3rem;
                outline: none;
                box-shadow: 0 1px 1px rgb(97, 97, 97);
            }

            .cta-book-button {
                justify-self: start;
                font-size: 1rem;
                text-transform: uppercase;
                color: var(--fourthColor);
                background-color: var(--thirdColor);
                border: none;
                border-radius: 0.1rem;
                padding: 0.3rem 0.8rem 0.22rem 0.68rem;
                margin-top: 0.2rem;
                justify-self: start;
                box-shadow: 0 1px 1px rgb(97, 97, 97);
                outline: none;
                cursor: pointer;
            }
            .cta-book-button:hover {
                background-color: var(--fourthColor);
                color: white;
            }

            @media screen and (min-width: 737px) {
                .cta-book-component {
                    border-radius: 0.1rem;
                }
            }
               
        
        `}</style>
    </div>
    )
}