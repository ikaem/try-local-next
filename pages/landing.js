import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../components/layout.component/layout.component";
import PageIntro from "../components/page-intro.component/page-intro.component";
import Imagery from "../components/imagery.component/imagery.component";
import Reviews from "../components/reviews.component/reviews.component";
import TourBrief from "../components/tour-brief.component/tour-brief.component";

const LandingPage = ({ landingImages, landingReviews, landingTours }) => {
    return (
    <Layout>
        <main>
            <section className="landing">
                <div className="page-intro-wrapper">
                    <PageIntro
                        title={"Try Local for a Day!"}
                        leadBold={"Get Local in Istria"}
                        leadRest={" - hang with everyday people, learn about history and current affairs, and make new friends..."}
                        backgroundImage={"/assets/images/landing/landing-background.jpg"}
                    />
                </div>

                <div className="for-a-day-tours pad-left-right-mobile">

                {
                    landingTours.map(tour => <TourBrief key={tour.tourId} {...tour} />)
                }

                </div>
            </section>

            <section className="imagery-wrapper">
                <Imagery images={landingImages}/>
            </section>
            <section className="user-centric">
                <div className="user-benefit pad-left-right-mobile">
                    <h2>What do I get with Try Local for a Day?</h2>
                    <ul className="user-benefit-list">
                        <li>24 hours with Istria locals</li>
                        <li> Time filled with fun, sports, culture and art events</li>
                        <li>Visit all major and not-so-major historical sites</li>
                        <li>3 homemade traditional meal</li>
                        <li>Visit pubs, clubs, beaches and restaurants known only to locals</li>
                        <li>Transport and food included in price</li>
                    </ul>
                </div>
                <div className="user-reviews">
                    <h2 className="pad-left-right-mobile">What did others get?</h2>
                    <div className="reviews-wrapper">
                        <Reviews reviews={landingReviews}/>
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

                .for-a-day-tours {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
                    gap: 1rem;
                    background-color: var(--firstColor);
                    padding-top: 0.7rem;
                    padding-bottom: 1rem;
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

                    .for-a-day-tours {
                        margin: 1rem 0 0 1rem;
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
};

export default LandingPage;

LandingPage.getInitialProps = async ({query}) => {
    const res = await fetch("https://try-local-next.herokuapp.com/api/landing_tours");
    const landingData = await res.json();
    return { ...landingData };
}