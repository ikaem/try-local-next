import Link from "next/link";

import Layout from "../components/layout.component/layout.component";
import PageIntro from "../components/page-intro.component/page-intro.component";
import Imagery from "../components/imagery.component/imagery.component";
import Reviews from "../components/reviews.component/reviews.component";
import CtaBook from "../components/cta-book.component/cta-book.component";

export default () => {
    return (
    <Layout>
        <main>
            <section className="landing">
                <div className="page-intro-wrapper">
                    <PageIntro
                        title={"Try Local for a Day!"}
                        leadBold={"Get authentic in Pula"}
                        leadRest={" - hang with everyday people, learn about history and current affairs, and make new friends..."}
                        backgroundImage={"/assets/images/landing/landing-background.jpg"}
                    />
                </div>
                <div className="cta-book-wrapper">
                    <CtaBook />
                </div>
            </section>

            <section className="imagery-wrapper">
                <Imagery />
            </section>
            <section className="user-centric">
                <div className="user-benefit pad-left-right-mobile">
                    <h2>What do I get with Try Local for a Day?</h2>
                    <ul className="user-benefit-list">
                        <li>24 hours with Pula locals</li>
                        <li> Time filled with fun, sports, culture and art events</li>
                        <li>Visit all major and not-so-major historical sites</li>
                        <li>3 homemade traditional meal</li>
                        <li>Visit pubs, clubs, beaches and restaurants known only to locals</li>
                        <li>Transport and food included in price</li>
                    </ul>
                    <Link href="#"><a className="learn-more-button">Learn More</a></Link>
                </div>
                <div className="user-reviews">
                    <h2 className="pad-left-right-mobile">What did others get?</h2>
                    <div className="reviews-wrapper">
                        <Reviews />
                    </div>
                </div>
            </section>
            <style jsx>{`
                .pad-left-right-mobile {
                    padding: 0 1rem;
                }
                main {
                    display: grid;
                    grid-template-columns: 1fr;
                    align-items: start;
                }
                .user-centric {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 0 1rem;
                }
                .user-centric h2 {
                    color: white;
                    font-size: 1.1rem;
                    margin: 0.6rem 0 0.3rem;
                    text-shadow: 0 1px 1px rgb(70, 70, 70);
                }

                .user-benefit {
                    display: flex;
                    flex-direction: column;
                    background-color: var(--secondColor);
                    padding-bottom: 1rem;
                }

                .user-benefit-list {
                    list-style-type: disc;
                    padding-left: 1.2rem;
                    color: white;
                }
                .learn-more-button {
                    align-self: start;
                    font-size: 1rem;
                    color: white;
                    background-color: var(--fourthColor);
                    border: none;
                    border-radius: 0.1rem;
                    padding: 0.20rem 0.8rem 0.3rem 0.68rem;
                    margin-top: 0.7rem;
                    box-shadow: 0 1px 1px rgb(97, 97, 97);
                    outline: none;
                    cursor: pointer;
                }
                .learn-more-button:hover {
                    background-color: var(--thirdColor);
                    color: var(--fourthColor);
                }
                .user-reviews {
                    background-color: var(--firstColor);
                    padding: 0 0 1rem;
                }

                @media screen and (min-width: 737px) {
                    main {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-templaste-rows: auto;
                        gap: 1rem 1rem;
                        margin-bottom: 1rem;
                    }

                    .user-centric {
                        grid-column: span 2;
                        grid-template-columns: 1fr 1fr;
                        align-items: start;
                    }

                    .cta-book-wrapper {
                        padding: 1rem 0 0 1rem;
                    }
                    .imagery-wrapper {
                        margin-right: 1rem;
                    }
                    .user-benefit {
                        border-radius: 0.1rem;
                        margin-left: 1rem;
                    }

                    .user-reviews {
                        border-radius: 0.1rem;
                        margin-right: 1rem;
                    }
                }

            `}</style>
        </main>
    </Layout>
    )
}