
export default function Card(props) {
    return (
        <div className="card card-holder m-4 bg-secondary ">
            <img src={props.image} className="card-image" alt={props.name} />
            <div className="card-body position-relative" alt={props.name} >
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="card-btn text-center" target={"_blank"} style={{

                    background: "steelblue",
                    color: "aliceblue"
                }} rel="noreferrer" >
                    Visit website
                </a>
            </div>
        </div>
    )
}   