import FastAverageColor from "fast-average-color";
import { useState, useEffect, useRef } from "react";

export default ({title, leadBold, leadRest, backgroundImage}) => {

    const analyzedBackground = useRef();
    const [isBackgroundLight, setIsBackgroundLight] = useState(true);

    useEffect(() => {
        backgroundImage && new FastAverageColor().getColorAsync(analyzedBackground.current)
        .then(color => {
            !color.isLight && setIsBackgroundLight(false);
        });
    }, [analyzedBackground]);


    return (
    <div className="intro-box">
        <h1 className="title">{title}</h1>
        <img ref={analyzedBackground} className="image" src={backgroundImage} style={{display: "none"}}/>
        <p className="lead">
            <span className="lead-bold">{leadBold} </span>
            <span className="lead-rest">{leadRest}</span>
        </p>

        <style jsx>{`
            .intro-box {
                padding: 1rem;
                background-size: cover;
                background-position: top;
                background-repeat: no-repeat;
            }
            .title {
                font-size: 2rem;
                margin-bottom: 0.6rem;
                text-shadow: 0 1px 1px rgb(97, 97, 97);
            }
            .lead-bold {
                font-weight: bold;  
            }

        `}</style>
        <style jsx>{`
            .intro-box {
                padding-bottom: ${backgroundImage? "15rem": 0};
                background-image: ${backgroundImage? `url(${backgroundImage})`: "none"};
            }
            .title {
                color: ${isBackgroundLight? "var(--secondColor)": "var(--thirdColor)"};
            }
            .lead {
                color: ${isBackgroundLight? "black": "white"};
            }
            @media screen and (min-width: 737px) {
                .intro-box {
                    background-image: none;
                    padding-bottom: 0;
                }
                .lead {
                    color: var(--fourthColor);
                }
            }
        `}</style>
 
    </div>
    )
}

//                 background-image: ${backgroundImage? `url(${backgroundImage})`: "none"};