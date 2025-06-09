import TechData from "../assets/docs/techs.json";

export default function Techs() {
    return (
        <div id="techs" className="page-container p-4">
            <h3>Technical Skills</h3>
            <div className="techs-row row py-3">
                {TechData.length !== 0 ? (
                    TechData.map((tech, i) => (
                        <div key={i} className="row col-12">
                            <h5 className="pb-3">{tech.description}:</h5>
                            {tech.entries.map((techEntry, i) => (
                                <div key={i}
                                     className="col-4 col-md-3 col-xl-2 py-2 d-flex align-items-center justify-content-start">
                                    <figure>
                                        <img className="img-fluid mx-auto d-block" src={techEntry.image}
                                             alt={techEntry.title} title={techEntry.title}/>
                                        <figcaption
                                            className="figure-caption text-center py-2">{techEntry.title}</figcaption>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <div className="row col-12"></div>
                )}
            </div>
        </div>
    );
}