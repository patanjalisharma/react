function Card(props) {
  return (
    <div className="card-main">
        <div className="card">
            <img src={props.logo} alt="image" />
            <div className="details">
            <h3>{props.company}</h3>
            <h6>{props.posted}</h6>

            </div>
            <h2>{props.title}</h2>

            <div className="badge">
                <span>{props.type}</span>
                <span>{props.level}</span>
            </div>
            <div className="foot">
            <div className="price">
                <h2>{props.salary}</h2>
                <p>{props.location}</p>
            </div>

            <button>Apply now</button>
            </div>
        </div>
    </div>
  )
}

export default Card