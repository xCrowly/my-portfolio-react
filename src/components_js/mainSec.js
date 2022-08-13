import cert_resp from '../assets/images/FreeCodeCamp_Responsive_web_design.png';

function MainSection() {
    return (
        <main id="main-sec" className="main-sec bg-white position-relative 
        container rounded fs-3 px-3">

            <ul className="nav nav-pills mb-3 justify-content-center " id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-intro-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-intro"
                        type="button" role="tab" aria-controls="pills-intro"
                        aria-selected="true">
                        Intro
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-certification-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-certification"
                        type="button" role="tab" aria-controls="pills-certification"
                        aria-selected="false">
                        Certifications
                    </button>
                </li>
                {/* <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-goal-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-goal"
                        type="button" role="tab" aria-controls="pills-goal"
                        aria-selected="false">
                        Goal
                    </button>
                </li> */}
            </ul>
            <div className="tab-content my-5 mx-3" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-intro" role="tabpanel"
                    aria-labelledby="pills-intro-tab" tabindex="0">
                    <strong className="fs-2 " style={{ color: "#4682B4" }}>
                        Hello there,
                    </strong>
                    <br />As i mentioned above
                    my name is Ahmed and i'm a <strong>Self taught developer</strong> with unlimited thirst for continuous
                    learning and improvement, Willing to achieve success through hard work.
                    <br />
                    Also trying to benefit from some of my skills like
                    problem Solving, good communication, teamwork and organizational skills.
                    <br />
                    <br />
                    <strong className="fs-3 fw-normal" style={{ color: "#4682B4" }}>
                        What makes me a good choice?
                    </strong>
                    <br />
                    I'm always <strong>motivated</strong> to learn, grow and excel in the tech field.
                </div>
                <div className="tab-pane fade" id="pills-certification" role="tabpanel"
                    aria-labelledby="pills-certification-tab" tabindex="0">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators rounded bg-dark">
                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1" aria-label="Slide 2">
                            </button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <a href="https://www.freecodecamp.org/certification/Crowly/responsive-web-design"
                                    target={"_blank"} rel="noreferrer">
                                    <img src={cert_resp} className="d-block w-100 rounded" alt="Responsive web design cert" />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="https://www.freecodecamp.org/certification/Crowly/responsive-web-design"
                                    target={"_blank"} rel="noreferrer">
                                    <img src={cert_resp} className="d-block w-100 rounded" alt="Responsive web design cert" />
                                </a>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon rounded bg-dark"
                                aria-hidden="true">
                            </span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon rounded bg-dark"
                                aria-hidden="true">
                            </span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* <div className="tab-pane fade" id="pills-goal" role="tabpanel"
                    aria-labelledby="pills-goal-tab" tabindex="0">...</div> */}
            </div>

        </main >
    )
}

export default MainSection;