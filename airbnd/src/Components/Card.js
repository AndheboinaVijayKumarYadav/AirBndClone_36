export default function Card(props) {
    return (
        <div className="card">
            {props.item.openSpots === 0 && <div className="card--badge"> Sold Out</div> }
            <img src={props.item.coverImg}className="card--image" alt="card images" />
            <div className="card--stats">
                <img src={props.starImg} className="card--star" alt=""/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From {props.item.price}</span> / person</p>
        </div>
    )
}