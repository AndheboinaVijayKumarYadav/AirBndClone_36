import Nav from './Components/Nav.js';
import logo from './Images/airbnb1.png';
import heroImg from './Images/Group77.png';
import Hero from './Components/Hero.js';
import starImg from './Images/Star1.png';
import './App.css';
import Card from './Components/Card.js'

function App() {
  const data =  [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "https://media.istockphoto.com/id/1411818808/photo/portrait-shot-of-smiling-young-businessman-at-office-looking-at-camera-concept-successful.webp?b=1&s=170667a&w=0&k=20&c=EMbrPCZK_qOxP3pNt3dRQTQku2S3sjFHXlVJlf1tDT0=",
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "https://media.istockphoto.com/id/1405522719/photo/man-sitting-indoor-looks-at-camera-participate-in-live-videoconference.webp?b=1&s=170667a&w=0&k=20&c=Dt8386bRyLdIZs_m586jKfbR3RaZ2M6evqqOnADCz-k=",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]
 
return (
    <div>
         <Nav logo = {logo}/>
         <Hero heroImg = {heroImg} />
         <section className="card--list">
         {
          data.map(item => {
            return (
           /*  <Card 
            key={item.id}
            imgSrc={item.coverImg}
            starImg={starImg} 
            title={item.title}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            price={item.price}
            openSpots={item.openSpots}/> */
            <Card
                key={item.id}
                starImg={starImg} 
                item={item}
            />
            )
          })
         }
         </section>
    </div>
  );
}

export default App;
