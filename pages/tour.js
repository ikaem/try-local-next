import Layout from "../components/layout.component/layout.component";
import PageIntro from "../components/page-intro.component/page-intro.component";
import ContactForm from "../components/contact-form.component/contact-form.component";
import Imagery from "../components/imagery.component/imagery.component";
import Reviews from "../components/reviews.component/reviews.component";
import CtaBook from "../components/cta-book.component/cta-book.component";
import TourDetailed from "./tour/[id]";

export default (props) => {
    console.log("tu sam", props);
    return (
    <Layout>
        <main>
            <section className="tour">
                <div className="page-intro-wrapper">
                    <PageIntro
                        title={"Brijuni Funky 1500 Years Stroll"}
                        leadRest={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget felis vel bibendum. Cras dictum nisi eget sem condimentum, ac vehicula felis viverra."}
                        backgroundImage={"/assets/images/about/about-background-alt.jpg"}
                    />
                </div>
                <div className="cta-book-wrapper">
                    <CtaBook />
                </div>
                <h2 className="pad-left-right-mobile">Why visit Brijuni?</h2>
                <p className="pad-left-right-mobile">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget felis vel bibendum. Cras dictum nisi eget sem condimentum, ac vehicula felis viverra. 
                </p>
                <h2 className="pad-left-right-mobile">What will you do on the tour?</h2>
                <p className="pad-left-right-mobile">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget felis vel bibendum. Cras dictum nisi eget sem condimentum, ac vehicula felis viverra. 
                </p>
                <h2 className="pad-left-right-mobile">What did our guests think about the tour?</h2>
                <div className="reviews-wrapper">
                    <Reviews />
                </div>

            </section>
            <section className="imagery-component-wrapper">
                <Imagery />
            </section>

            <section className="summary-contact">
                <div className="tour-summary pad-left-right-mobile">
                    <h2>Tour Details</h2>
                    <div className="summary">
                        <div>
                            <span className="key">Frequency: </span>
                            <span className="value">Daily</span>
                        </div>
                        <div>
                            <span className="key">Duration: </span>
                            <span className="value">11:00 - 17:00</span>
                        </div>
                        <div>
                            <span className="key">Departure from: </span>
                            <span className="value">Fažana Main Pier</span>
                        </div>
                        <div>
                            <span className="key">Return to: </span>
                            <span className="value">Fažana Main Pier</span>
                        </div>
                        <div>
                            <span className="key">Tour Highlights: </span>
                            <ul className="value">
                                <li>Brijuni Zoo</li>
                                <li>1500 Years Old Olive Tree</li>
                                <li>Bijuni Ethnological Museum</li>
                            </ul>
                        </div>
                        <div>
                            <span className="key">Price per person: </span>
                            <span className="value">250 Kn</span>
                        </div>
                        <div>
                            <span className="key">Price includes: </span>
                            <ul className="value">
                                <li>National Park entrance</li>
                                <li>Ferry ride</li>
                                <li>Lunch</li>
                                <li>Professional Tour guide</li>
                            </ul>
                        </div>
                    </div>

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
            }
            .tour > h2 {
                color: var(--secondColor);
                font-size: 1.1rem;
                margin: 1rem 0 0.3rem;
            }
            .tour > p {
                color: var(--fourthColor);
            }

            .imagery-component-wrapper {
                display: none;
            }
            .summary-contact {
                display: grid;
                grid-template-columns: 1fr;
                gap: 0 1rem;
            }
            .tour-summary {
                background-color: var(--secondColor);
                padding-top: 0.7rem;
                padding-bottom: 1rem;
                border-radius: 0.1rem;
            }
            .tour-summary > h2 {
                color: var(--thirdColor);
                font-size: 1.1rem;
                margin-bottom: 0.3rem;
            }
            .summary {
                color: white;
            }
            .summary > div {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0 0.3rem;
                padding: 0.2rem 0 0.2rem 0;
                border-bottom: 1px solid rgba(0,0,0,0.2);
            }
            .summary > div:last-child {
                border: none;
            }

            .summary ul {
                list-style-type: disc;
                padding-left: 1.2rem;
            }
            .key {

                font-weight: bold;
            }

            @media screen and (min-width: 737px) {

                main {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-templaste-rows: auto;
                    gap: 1rem 0;
                    margin-bottom: 1rem;
                }
                .tour {
                    grid-row: span 3;
                }

                .cta-book-wrapper {
                    padding: 1rem 1rem 0 1rem;
                } 

                .imagery-component-wrapper {
                    display: block;
                    margin-right: 1rem;
                }
                .summary-contact {
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

TourDetailed.getInitialProps = async ({query}) => {
    console.log(ctx);
    const res = await fetch (`http://localhost:3000/api/${query.id}`);
    const tour = await res.json();
    return {tour};
  }