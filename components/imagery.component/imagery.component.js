export default ({images}) => {
    console.log(images);
    return (
    <div className="imagery-component">
        {images.map((image, index) => 
            <img
                key={index} 
                className="imagery-image" 
                src={image} alt="try local staff"/>)
        }
        <style jsx>{`
            .imagery-component {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
            }

            .imagery-image {
                width: 100%;
                height: auto;
                display: block;
            }


            @media screen and (min-width: 737px) {
                .imagery-component {
                    grid-template-columns: repeat(3, 1fr);

                    gap: 0.5rem;
                }
                .imagery-image {
                    border-radius: 0.1rem;
                }
                .imagery-image:nth-of-type(1) {
                    grid-column: span 3;
                    grid-row: span 2;
                }
                .imagery-image:nth-of-type(2) {
                    grid-column: span 2;
                    grid-row: span 2;
                    align-self: stretch;
                }
                .imagery-image:nth-of-type(4) {
                    grid-column: 3;
                }
            }
        `}</style>
    </div>
    )
}