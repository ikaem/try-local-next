import { useState } from "react";

import { sendMessage } from "../../services/userInteraction";

export default () => {
    const [contactFormData, setContactFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isMessageSent, setIsMessageSent] = useState(false);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setContactFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await sendMessage(contactFormData);
            console.log("resp", resp);
            if(resp.message !== "message successfully sent!") throw new Error(resp.message);

            setIsMessageSent(true);
            setContactFormData({
                name: "",
                email: "",
                message: "",
            })
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
    <div className="contact-form-component">
        <h2>Have a question? Send us a message</h2>
        <form 
            className="contact-form"
            onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
                required
                className="contact-form-input" 
                type="text" name="name" id="name"
                value={contactFormData.name}
                onChange={handleChange}/>
            <label htmlFor="email">Email</label>
            <input 
                required
                className="contact-form-input" 
                type="email" name="email" id="email"
                value={contactFormData.email}
                onChange={handleChange}/>

            <label htmlFor="message">Message</label>
            <textarea 
                required
                className="contact-form-input" 
                name="message" id="message" cols="30" rows="10"
                value={contactFormData.message}
                onChange={handleChange}/>

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