export default function Card(props) {
    return (
        <div className="card card-holder m-4 bg-secondary" style={{ width: "250px", height: "300px" }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body position-relative" alt="..." >
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="card-btn text-center" target={"_blank"} style={{

                    background: "steelblue",
                    color: "aliceblue"
                }} rel="noreferrer">
                    Visit website
                </a>
            </div>
        </div>
    )
}   