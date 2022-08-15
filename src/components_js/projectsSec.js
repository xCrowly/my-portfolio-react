import cards from "../assets/json/cards.json";
import Card from "./card";

function ProjectsSection() {
    return (
        <section id="projects-sec" className="projects-sec" style={{ background: "#FFDAB9" }}>
            <div className="card-container text-center container">
                {cards.data.cards.map(user => {
                    return (
                        <Card
                            name={user.name}
                            description={user.description}
                            link={user.link}
                            image={user.image}
                        />
                    )
                })}
            </div>
        </section>
    )
}
export default ProjectsSection;