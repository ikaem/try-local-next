export default () => {
    return (
    <div className="contact-form-component">
        <h2>Have a question? Send us a message</h2>
        <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input className="contact-form-input" type="text" name="name" id="name"/>
            <label htmlFor="email">Email</label>
            <input className="contact-form-input" type="email" name="email" id="email"/>
            <label htmlFor="message">Message</label>
            <textarea className="contact-form-input" name="message" id="message" cols="30" rows="10"/>
            <button className="contact-form-button">Send</button>
        </form>
        <style jsx>{`
            .contact-form-component {
                background-color: var(--firstColor);
                padding: 0.7rem 1rem 1rem;
                border-radius: 0.1rem;
            }
            .contact-form-component > h2 {
                color: var(--thirdColor);
                font-size: 1.1rem;
                margin-bottom: 0.3rem;
            }
            .contact-form {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.3rem;
                color: white;
            }
            .contact-form-input {
                border: none;
                border-radius: 0.1rem;
                padding: 0.3rem;
                outline: none;
                box-shadow: 0 1px 1px rgb(97, 97, 97);
            }
            .contact-form > textarea {
                grid-column: span 2;
            }
            .contact-form-button {
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
            .contact-form-button:hover {
                background-color: var(--fourthColor);
                color: var(--thirdColor);
            }
        `}</style>
    </div>
    )
}