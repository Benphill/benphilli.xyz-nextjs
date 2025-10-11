import "./styles.css";

export const metadata = {
  title: 'Alain Trudel',
  description: 'About Alain Trudel',
};

export default function AlainTrudel() {
  return (
    <html lang="en">
        <head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Alain Trudel</title>
        </head>
        <body>
            <div className="header">
                <h3>Alain Trudel</h3>
            </div>
            <div className="grid-container">
                <div className="grid-item item1">
                    <h3>Life Details</h3>
                    <p>Alain Trudel began by learning at the Conservatoire de musique du Québec from 1981-1985. During that time he became the first brass player to win the Montreal Symphony Orchestra Concours and the International Stepping Stones of the Canadian Music. He then joined the Barcelona Symphony Orchestra, until he became a founding member of the Nouvel Ensemble Moderne, and continued for 6 years until moving to soloing and conducting.</p>
                </div>
                
                <div className="grid-item item2">
                    <h3>Professional Achievements</h3>
                    <p>Trudel is a highly decorated trombonist and conductor, having won awards including the Virginia Parker Award, the Mildred Dixon Holmes Award, Le grand prix de l&apos;Académie Charles Cros, the Choc de l&apos;Année of Le Monde la Musique, a Prix Opus, a Juno award and the 2008 Heinz Unger award.</p>
                </div>
                
                <div className="grid-item item3">
                    <h3>What Makes Him Unique?</h3>
                    <p>Alain Trudel is considered one of the most talented trombonists and conductors in the world. “[Trudel] plays trombone just as he breathes, with such ease and facility that one is not made aware of the technical challenges involved&apos; (Quebec City Le Soleil, 5 Dec 1989) He is a pioneer in Canadian brass, his skill and technique pushing him beyond many greats of the field.</p>
                </div>
                
                <div className="grid-item item4">
                    <p>This performance shows how truly effortless Trudel makes the trombone seem, and really puts on display the effort that he has put into his craft.</p>
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/NMa_Y0cyw2s" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </body>
    </html>
  );
}