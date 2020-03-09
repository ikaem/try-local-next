import Link from "next/link";

export default ({tourId, tourTitle, tourFeaturedImage, tourLead, tourType}) => {
    return (
    <article className="tour-brief-component">
      <h2 className="tour-title">{tourTitle}</h2>
      <img 
        className="tour-thumbnail"
        src={tourFeaturedImage}/>
      <p className="tour-lead">
        {tourLead}
      </p>
      {/* <Link href={`/tour/${tourId}`} as={`/tour/${tourId}`}> */}
      <Link href="/tour/[id]" as={`/tour/${tourId}`}>
        <a className="details-link">Learn More</a>
      </Link>

      <style jsx>{`
        .tour-brief-component {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          gap: 0.3rem 0;

        }
        .tour-title {
          font-size: 1.3rem;
          align-self: end;
        }
        .tour-thumbnail {
          width: 100%;
          border-radius: 0.1rem;
        }
        .details-link {
          color: var(--fourthColor);
          background-color: var(--thirdColor);
          border-radius: 0.1rem;
          padding: 0.1rem 0.6rem 0.2rem;
          margin-top: 0.2rem;
          justify-self: start;
          box-shadow: 0 1px 1px rgb(120, 120, 120);
        }
        .details-link:hover {
          background-color: var(--fourthColor);
          color: white;
        }
      `}</style>
      <style jsx>{`
        .tour-brief-component {
          color: ${tourType === "classic"? "var(--secondColor)": "var(--thirdColor)"};
        }
        .tour-lead {
            color: ${tourType === "classic"? "var(--fourthColor)": "white"};
        }
      `}</style>
    </article>
    )
}