import "./styles.css";

export const metadata = {
  title: 'Abbie Conant',
  description: 'About Abbie Conant',
};

export default function AbbieConant() {
  return (
    <html lang="en">
        <head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Abbie Conant</title>
        </head>
        <body>
            <div className="header">
                <h3>Abbie Conant</h3>
            </div>
            <div className="grid-container">
                <div className="grid-item item1">
                    <h3>Life Details</h3>
                    <p>Abbie Conant studied at Hochschule für Musik und Tanz Köln, before travelling to Italy, where she studied contemporary music in Siena. After she got her diploma, she became the first trombonist in the orchestra of the Royal Opera, Turin. In 1980, she, was given the role of first trombone in the Munich Philharmonic, but was demoted simply for being a woman. In 1992, Conant became a professor of trombone at the Staatliche Hochschule für Musik, Trossingen.</p>
                </div>
                
                <div className="grid-item item2">
                    <h3>Professional Achievements</h3>
                    <p>Conant is highly regarded for her skill and proficiency as a trombonist, and has received the Neil Humfeld award by the International Trombone Academy for her abilities as a teacher.</p>
                </div>
                
                <div className="grid-item item3">
                    <h3>What Makes Her Unique?</h3>
                    <p>She is a major activist against sexism, writing works including theatre performances, many of which mirror her experience with the Munich Philharmonic. She has been an excellent role model and educator to countless people, and inspired Canadian author Malcolm Gladwell to write the book Blink, which includes a chapter dedicated to her story.</p>
                </div>
                
                <div className="grid-item item4">
                    <p>This is Abbie Conant&apos;s work, Alethia. This recording demonstrates perfectly how she is able to combine theatre and the trombone, while using aspects of her life as a form of activism, making for a truly unique performance.</p>
                    <div className="video-container">
                        <iframe src="https://www.youtube.com/embed/XZrBZSIT0G0?si=ET84myoXzVPQ5ELJ" 
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
