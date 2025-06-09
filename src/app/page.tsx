import Navigation from "./components/navigation";
import Landing from "./screens/landing";
import Techs from "./screens/techs";
import Projects from "./screens/projects";
import Contact from "./screens/contact";

export default function Home() {
    return (
        <div className="container-fluid overflow-hidden">
            <div className="row vh-100 overflow-auto">
                <div className="col-12 col-sm-3 col-md-3 col-lg-2 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
                    <Navigation/>
                </div>
                <div className="col d-flex flex-column h-sm-100">
                    <main className="row overflow-auto">
                        <div className="col p-0">
                            <Landing/>
                            <Techs/>
                            <Projects/>
                            <Contact/>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
