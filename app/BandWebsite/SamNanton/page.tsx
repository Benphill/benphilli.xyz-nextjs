import "./style.css"

export const metadata = {
  title: 'Sam Nanton',
  description: 'About Sam Nanton',
};

export default function SamNanton() {
  return (
    <html lang="en">
    <head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Tricky Sam Nanton</title>
    </head>
    <body>
        <div className="header">
            <h3>Tricky Sam Nanton</h3>
        </div>
        <div className="grid-container">
            <div className="grid-item item1">
                <h3>Life Details</h3>
                <p>In 1921, he created his technique of using a plunger with a trombone after hearing Johnny Dunn using one with a trombone. He brought this technique into Frazier’s Harmony Five during his time in 1923 to 1924, and to the Ellington orchestra in 1926.</p>
            </div>
            
            <div className="grid-item item2">
                <h3>Professional Achievements</h3>
                <p>While not winning any highly publicized individual awards, Nanton was a big part of giving the Ellington orchestra its reputation and popularity.</p>
            </div>
            
            <div className="grid-item item3">
                <h3>What Makes Him Unique?</h3>
                <p>Nanton was the pioneer of the plunger mute for trombones, giving it a unique “wa-wa” sound, that many have said make it sound like someone talking. While some aspects of this technique are still a secret, many people have been able to replicate it.</p>
            </div>
            
            <div className="grid-item item4">
                <p>This performance is really cool to see, because it&apos;s clear that Nanton&apos;s usage of the plunger technique has really changed the way this group plays, and completely changes the feel of the solo.</p>
                <div className="video-container">
                    <iframe src="https://www.youtube.com/embed/qDQpZT3GhDg" 
                            frameBorder="0" 
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