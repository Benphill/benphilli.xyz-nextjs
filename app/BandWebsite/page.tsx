import "./styles.css";

export const metadata = {
    title: 'Trombonists',
    description: 'Trombonists',
};

export default function Trombonists() {
  return (
    <div>
        <head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Trombonists</title>
        </head>
        <body>
            <div className="header">
                <h3>Trombonists</h3>
            </div>
            <div className="grid-container">
                <div className="grid-item item1">
                    <a href="/BandWebsite/AlainTrudel">Alain Trudel</a>
                </div>
                
                <div className="grid-item item2">
                    <a href="/BandWebsite/SamNanton">Tricky Sam Nanton</a>
                </div>

                <div className="grid-item item3">
                    <a href="/BandWebsite/AbbieConant">Abbie Conant</a>
                </div>

                <div className="grid-item item4">
                    <a href="/BandWebsite/Maisie">Maisie Ringham-Wiggins</a>
                </div>
            </div>
        </body>
    </div>
  );
}