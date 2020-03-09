export default () => {
    return (
    <div className="imagery-component">
        {/* <div
            style={{backgroundImage: `url("/assets/images/about/about-imagery1.jpg")`}}>
            1
        </div> */}
        <img className="imagery-image" src="/assets/images/about/about-imagery1.jpg" alt="try local staff"/>
        <style jsx>{`
            .imagery-image {
                width: 100%;
                margin: 0;
                display: block;
            }
        `}</style>
    </div>
    )
}