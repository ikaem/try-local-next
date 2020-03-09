import Layout from "../components/layout.component/layout.component";
import PageIntro from "../components/page-intro.component/page-intro.component";
import ContactForm from "../components/contact-form.component/contact-form.component";
import Imagery from "../components/imagery.component/imagery.component";
import Reviews from "../components/reviews.component/reviews.component";

export default () => {
    return (
    <Layout>
        <main>
            <section className="about">
                <div className="page-intro-wrapper">
                    <PageIntro
                        title={"About Try Local"}
                        leadRest={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget felis vel bibendum. Cras dictum nisi eget sem condimentum, ac vehicula felis viverra."}
                        backgroundImage={"/assets/images/about/about-background-alt.jpg"}
                    />
                </div>
                <h2 className="pad-left-right-mobile">Who are we?</h2>
                <p className="pad-left-right-mobile">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget felis vel bibendum. Cras dictum nisi eget sem condimentum, ac vehicula felis viverra. 
                </p>
                <h2 className="pad-left-right-mobile">How do we engage you?</h2>
                <p className="pad-left-right-mobile">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget felis vel bibendum. Cras dictum nisi eget sem condimentum, ac vehicula felis viverra. 
                </p>
                <h2 className="pad-left-right-mobile">What do our guests say about us?</h2>
                <div className="reviews-wrapper">
                    <Reviews />
                </div>

            </section>
            <section className="imagery-component-wrapper">
                <Imagery images={["/assets/images/about/about-imagery1.jpg"]}/>
            </section>
            <section className="contact">
                <div className="contact-info pad-left-right-mobile">
                    <h2>Contact Us</h2>
                    <address>
                        <span>Try Local d.o.o.</span>
                        <span>Random Street 16b</span>
                        <span>52100 Pula</span>
                        <span>Croatia</span>
                        <a href="mailto:info@trylocal.com">
                            <i className="fas fa-envelope-square"></i>
                            <span> info@trylocal.com</span>
                        </a>
                        <a href="tel:+38552525252">
                            <i className="fas fa-phone-square"></i>
                            <span> +38552525252</span>
                        </a>
                    </address>
                </div>
                <div className="contact-form-wrapper">
                    <ContactForm />
                </div>
            </section>
        </main>
        <style jsx>{`
            .pad-left-right-mobile {
                padding: 0 1rem;
            }
            main {
                display: grid;
                grid-template-columns: 1fr;
                align-items: start;
                gap: 1rem;
            }
            .about > h2 {
                color: var(--secondColor);
                font-size: 1.1rem;
                margin: 1rem 0 0.3rem;
            }
            .about > p {
                color: var(--fourthColor);
            }

            .imagery-component-wrapper {
                display: none;
            }
            .contact {
                display: grid;
                grid-template-columns: 1fr;
                gap: 0 1rem;
            }
            .contact-info {
                background-color: var(--secondColor);
                padding-top: 0.7rem;
                padding-bottom: 1rem;
                border-radius: 0.1rem;
            }
            .contact-info > h2 {
                color: var(--thirdColor);
                font-size: 1.1rem;
                margin-bottom: 0.3rem;
            }
            .contact-info > address {
                font-style: normal;
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                line-height: 1.4rem;
                color: white;
            }
            .contact-info a {
                margin-top: 0.3rem;
                color: rgb(231, 231, 231);
            }
            .contact-info a:hover {
                color: var(--thirdColor);
            }
            .contact-info i {
                color: var(--thirdColor);
            }

            @media screen and (min-width: 737px) {

                main {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-templaste-rows: auto;
                    gap: 1rem 0;
                    margin-bottom: 1rem;
                }
                .about {
                    grid-row: span 3;
                }
                .imagery-component-wrapper {
                    display: block;
                    margin-right: 1rem;
                }
                .contact {
                    grid-template-columns: 1fr 1fr;;
                    align-items: start;
                    gap: 0 1rem;
                    margin-right: 1rem;
                }

            }
        `}</style>
    </Layout>
    )
}