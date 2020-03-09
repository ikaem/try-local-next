import Layout from "../components/layout.component/layout.component";
import PageIntro from "../components/page-intro.component/page-intro.component";
import TourBrief from "../components/tour-brief.component/tour-brief.component";

import fetch from "isomorphic-unfetch";

const Index = ({briefTours}) => {
  return (
    <Layout>
      <main>
        <section className="page-intro-wrapper">
          <PageIntro 
            title={`When in Istria, Try Local`}
            leadBold={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
            leadRest={`Iusto minus illum vero doloribus totam dolore ea molestias ipsum libero.`}
          />
        </section>
        <section className="tours">
          <div className="for-a-day-tours pad-left-right-mobile">
            {briefTours.filter(tour => tour.tourType === "for-day").map(tour => <TourBrief key={tour.tourId} {...tour} />)}
          </div>

          <div className="classic-tours pad-left-right-mobile">
            {briefTours.filter(tour => tour.tourType === "classic").map(tour => <TourBrief key={tour.tourId} {...tour} />)}
          </div>
        </section>
      </main>
      <style jsx>{`
        .pad-left-right-mobile {
          padding: 0 1rem;
        }
        .tours {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem 1rem;
          align-items: start;
          margin-top: 1.3rem;
        }
        .for-a-day-tours {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem 0;
          background-color: var(--firstColor);
          padding-top: 0.4rem;
          padding-bottom: 1rem;
          margin-bottom: 0.4rem;
        }
        .classic-tours {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          padding-bottom: 1rem;
        }

        @media screen and (min-width: 737px) {
          .main {
            margin-bottom: 1rem;
          }
          .tours {
            grid-template-columns: repeat(3, 1fr);
            align-items: start;
          }
          .classic-tours {
            grid-column: 1/3;
            grid-row: 1;
            padding-right: 0;
            grid-template-columns: repeat(2, 1fr);

          }
          .for-a-day-tours {
            margin-top: 2.01rem;
            margin-right: 1rem;
            border-radius: 0.1rem;
          }
        }
      `}</style>
    </Layout>
  )
};

export default Index;

Index.getInitialProps = async (ctx) => {
  // const res = await fetch ("http://localhost:3000/api/tours");
  // const res = await fetch (`http://localhost:${process.env.PORT || "3000"}/api/tours`);
  const res = await fetch (`https://try-local-next.herokuapp.com:${process.env.PORT}/api/tours`);
  const briefTours = await res.json();
  return {briefTours};
}