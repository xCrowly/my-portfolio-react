function MainSection() {
    return (
        <main id="main-sec" className="main-sec bg-white position-relative 
        container rounded fs-3 px-3">

            <ul className="nav nav-pills mb-3 justify-content-center " id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-intro-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-intro"
                        type="button" role="tab" aria-controls="pills-intro"
                        aria-selected="true">Intro</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-certification-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-certification"
                        type="button" role="tab" aria-controls="pills-certification"
                        aria-selected="false">Certifications</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-goal-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-goal"
                        type="button" role="tab" aria-controls="pills-goal"
                        aria-selected="false">Goal</button>
                </li>
            </ul>
            <div className="tab-content my-5 mx-3" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-intro" role="tabpanel"
                    aria-labelledby="pills-intro-tab" tabindex="0">Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Et dicta provident nihil impedit. Repellat dolorum at dolores
                    repellendus. Eveniet necessitatibus voluptatum quibusdam ad praesentium labore!
                    Officiis, repellendus magni. Dolorem, quam.
                </div>
                <div className="tab-pane fade" id="pills-certification" role="tabpanel"
                    aria-labelledby="pills-certification-tab" tabindex="0">...</div>
                <div className="tab-pane fade" id="pills-goal" role="tabpanel"
                    aria-labelledby="pills-goal-tab" tabindex="0">...</div>
            </div>

        </main >
    )
}

export default MainSection;