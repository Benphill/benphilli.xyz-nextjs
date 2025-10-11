import "./style.css"

export const metadata = {
  title: 'Maisie Ringham-Wiggins',
  description: 'About Maisie Ringam-Wiggins',
};

export default function Home() {
  return (
        <div>
            <head>
                <meta charSet="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Maisie Ringham-Wiggins</title>
            </head>
            <body>
                <div className="header">
                    <h3>Maisie Ringham-Wiggins</h3>
                </div>
                <div className="grid-container">
                    <div className="grid-item item1">
                        <h3>Life Details</h3>
                        <p>At the age of 10, Maisie Ringham was taught by her father to play the trombone, and immediately had a talent for it, performing at many concerts and shows just a couple years later. Later, she received a scholarship to the Royal Manchester College of Music, where she studied. She then was invited to join the Hallé orchestra, what had been a dream of hers. After being a part of the orchestra for 10 years, she slowed down to raise a family with her husband, Ray Wiggins.</p>
                    </div>
                    
                    <div className="grid-item item2">
                        <h3>Professional Achievements</h3>
                        <p>Throughout her career, she has received the Sheila Tracy Award from the British Trombone Society, and has become a Member of the British Empire for her services to music.</p>
                    </div>
                    
                    <div className="grid-item item3">
                        <h3>What Makes Her Unique?</h3>
                        <p>Maisie Ringham-Wiggins was the first woman to play as principal trombone in a British orchestra, being the Hallé orchestra, the longest standing symphony orchestra in Britain.</p>
                    </div>
                    
                    <div className="grid-item item4">
                        <p>This song was one that she originally played when she was quite young while performing for many small concerts, and the experience that she brought to people that saw her as a young girl was truly very unique and impactful for the time.</p>
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/RtdGUePGSi8?si=5rZv0QSRPUQ4hELh" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </body>
      </div>
  );
}
<html lang="en">
</html>