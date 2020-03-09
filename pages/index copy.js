import Layout from "../components/layout.component/layout.component";
import PageIntro from "../components/page-intro.component/page-intro.component";
import TourBrief from "../components/tour-brief.component/tour-brief.component";

export default () => {
  return (
    <Layout>
      <main>
        <section className="page-intro-wrapper">
          <PageIntro 
            title={`When in Istria, Try Local`}
            leadBold={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
            leadRest={`Iusto minus illum vero doloribus totam dolore ea molestias ipsum libero.`}
            // backgroundImage={"https://as01.epimg.net/futbol/imagenes/2019/09/09/primera/1568022617_510344_1568022983_noticia_normal.jpg"}
          />
        </section>
        <section className="tours">
          <div className="for-a-day-tours pad-left-right-mobile">
            <TourBrief
              tourId={1}
              tourTitle={"For A Day Tour"}
              tourImage={"https://source.unsplash.com/734x492/?pula"}
              tourLead={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et quidem dignissimos numquam..."}
              isClassicTour={false} />
            <TourBrief
              tourId={1}
              tourTitle={"For A Day Tour"}
              tourImage={"https://source.unsplash.com/734x492/?pula"}
              tourLead={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et quidem dignissimos numquam..."}
              isClassicTour={false} />
            <TourBrief
              tourId={1}
              tourTitle={"For A Day Tour"}
              tourImage={"https://source.unsplash.com/734x492/?pula"}
              tourLead={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et quidem dignissimos numquam..."}
              isClassicTour={false} />
          </div>
          <div className="classic-tours pad-left-right-mobile">
          <TourBrief
              tourId={1}
              tourTitle={"Classic Tour"}
              tourImage={"https://source.unsplash.com/734x492/?pula"}
              tourLead={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et quidem dignissimos numquam..."}
              isClassicTour={true} />
            <TourBrief
              tourId={1}
              tourTitle={"Classic Tour"}
              tourImage={"https://source.unsplash.com/734x492/?pula"}
              tourLead={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et quidem dignissimos numquam..."}
              isClassicTour={true} />
            <TourBrief
              tourId={1}
              tourTitle={"Classic Tour"}
              tourImage={"https://source.unsplash.com/734x492/?pula"}
              tourLead={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et quidem dignissimos numquam..."}
              isClassicTour={true} />
            <TourBrief
              tourId={1}
              tourTitle={"Classic Tour"}
              tourImage={"https://source.unsplash.com/734x492/?pula"}
              tourLead={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et quidem dignissimos numquam..."}
              isClassicTour={true} />
            <TourBrief
              tourId={1}
              tourTitle={"Classic Tour"}
              tourImage={"https://source.unsplash.com/734x492/?pula"}
              tourLead={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod et quidem dignissimos numquam..."}
              isClassicTour={true} />
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
          gap: 0 1rem;
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
} 