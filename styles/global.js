export default () => {
    return (
    <style jsx global>{`
        {/* variables */}
        :root {
            --firstColor: #007B8E;
            --secondColor: #008E6C;
            --thirdColor: #F99E00;
            --fourthColor: #3E3E3E;
        }

        {/* reset */}
        body, h1, ul, p, h2, h3, input, a {
            margin: 0;
            padding: 0;
            list-style-type: none;
            text-decoration: none;
        }

        {/* fonts */}
        html {
            font-size: 16px;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            overflow-x: hidden;
        }
        @media screen and (min-width: 737px) {
            html {
                font-size: 18px;
            }
        }
    `}</style>
    )
}