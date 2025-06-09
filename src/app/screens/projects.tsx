import ClientData from "../assets/docs/clients.json";
import ProjectData from "../assets/docs/projects.json";
import {SiExpress} from "react-icons/si";
import {
    TbBrandJavascript,
    TbBrandHtml5,
    TbBrandCss3,
    TbBrandTypescript,
    TbBrandRedux,
    TbBrandReact,
    TbBrandNodejs,
    TbBrandMongodb,
    TbBrandNextjs,
    TbBrandGithub
} from "react-icons/tb";

export default function Projects() {
    const projectImageHeight = "auto";
    const projectImageWidth = "75%";

    return (
        <div id="projects" className="page-container p-4">
            <h3>Projects</h3>
            <div className="row py-3">
                <p>Professionally, I have had the privilege of working with the following clients:</p>
                {ClientData.length !== 0 ? (
                    ClientData.map((client, i) => (
                        <div key={i} className="col-6 col-md-4 col-lg-3 col-xl-2 d-flex align-items-center py-lg-0 py-3">
                            <a href={client.site_url} target="_blank">
                                <img className="img-fluid" src={client.image} alt={`${client.title} Logo`}/>
                            </a>
                        </div>
                    ))
                ) : (
                    <div className="col"></div>
                )}
            </div>
            <div className="row py-3">
                <p>During my studies at HyperionDev, I created the applications below:</p>
                {ProjectData.length !== 0 ? (
                    ProjectData.map((project, i) => (
                        <div key={i} className="p-1 col-12 col-xl-3 col-lg-4 col-md-6">
                            <div className="card bg-dark text-white">
                                <div className="card-header">{project.title}</div>
                                <div className="card-body">
                                    <img className="card-img"
                                         width={projectImageWidth}
                                         height={projectImageHeight}
                                         src={project.image}
                                         alt={project.title}/>
                                </div>
                                <div className="card-footer">
                                    <div className="row" style={{fontSize: "1.5rem"}}>
                                        <div className="col-8">
                                            {project.tech.includes("JavaScript") ? (
                                                <div className="project-icon d-inline">
                                                    <TbBrandJavascript title="JavaScript"/>&nbsp;
                                                </div>
                                            ) : (
                                                <div className="d-none"></div>
                                            )}

                                            {project.tech.includes("HTML") ? (
                                                <div className="project-icon d-inline">
                                                    <TbBrandHtml5 title="HTML"/>&nbsp;
                                                </div>
                                            ) : (
                                                <div className="d-none"></div>
                                            )}

                                            {project.tech.includes("CSS") ? (
                                                <div className="project-icon d-inline">
                                                    <TbBrandCss3 title="CSS"/>&nbsp;
                                                </div>
                                            ) : (
                                                <div className="d-none"></div>
                                            )}

                                            {project.tech.includes("TypeScript") ? (
                                                <div className="project-icon d-inline">
                                                    <TbBrandTypescript title="TypeScript"/>&nbsp;
                                                </div>
                                            ) : (
                                                <div className="d-none"></div>
                                            )}

                                            {project.tech.includes("Redux") ? (
                                                <div className="project-icon d-inline">
                                                    <TbBrandRedux title="Redux"/>&nbsp;
                                                </div>
                                            ) : (
                                                <div className="d-none"></div>
                                            )}

                                            {project.tech.includes("MongoDB") ? (
                                                <div className="project-icon d-inline">
                                                    <TbBrandMongodb title="MongoDB"/>&nbsp;
                                                </div>
                                            ) : (
                                                <div className="d-none"></div>
                                            )}

                                            {project.tech.includes("Express") ? (
                                                <div className="project-icon d-inline">
                                                    <SiExpress title="Express"/>&nbsp;
                                                </div>
                                            ) : (
                                                <div className="d-none"></div>
                                            )}

                                            {project.tech.includes("React") ? (
                                                <div className="project-icon d-inline">
                                                    <TbBrandReact title="React"/>&nbsp;
                                                </div>
                                            ) : (
                                                <div className="d-none"></div>
                                            )}

                                            {project.tech.includes("Node") ? (
                                                <div className="project-icon d-inline">
                                                    <TbBrandNodejs title="Node"/>&nbsp;
                                                </div>
                                            ) : (
                                                <div className="d-none"></div>
                                            )}

                                            {project.tech.includes("Next") ? (
                                                <div className="project-icon d-inline">
                                                    <TbBrandNextjs title="Next"/>&nbsp;
                                                </div>
                                            ) : (
                                                <div className="d-none"></div>
                                            )}
                                        </div>
                                        <div className="col-4 text-end" style={{fontSize: "1.5rem"}}>
                                            <a target="_blank"
                                               className="project-icon card-link m-1"
                                               href={project.repoLink}>
                                                <TbBrandGithub title="GitHub"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col"></div>
                )}
            </div>
        </div>
    );
}
