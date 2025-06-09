"use client";

export default function Landing() {
    /**
     * Function to scroll to specified element ID when a corresponding navigation item is clicked.
     * @param element_id
     */
    const scrollToHash = function (element_id: string) {
        const element = document.getElementById(element_id);

        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    const years = new Date().getFullYear() - 2022;

    return (
        <div id="home" className="page-container p-4">
            <div className="row h-100">
                <div className="col-lg-4 d-none d-lg-flex justify-content-center align-items-center">
                    <img className="profile-image img-fluid h-100"
                         src="/assets/images/Chanelle.svg"
                         alt="Chanelle Bösiger"/>
                </div>
                <div className="col-12 col-lg-8 align-content-center">
                    <h3>Hello World! <span className="wave">&#128075;</span> I am</h3>
                    <h1>Chanelle Bösiger</h1>
                    <img className="profile-image img-fluid py-3 d-block d-lg-none"
                         src="/assets/images/Chanelle.svg"
                         alt="Chanelle Bösiger"/>
                    <p>
                        I am a software engineer with {years} years of experience in the field. In this role, I actively
                        collaborate with graphic designers, testers, and fellow developers, both internally and
                        externally, to deliver high-quality solutions. I am committed to delivering innovative,
                        user-centric solutions.
                    </p>
                    <p>
                        With experience in both front-end and back-end development, alongside a focus on problem-solving
                        and attention to detail, I aim to build applications that align with project requirements and
                        effectively address client needs.
                    </p>
                    <button className="btn mt-3"
                            title="Contact"
                            onClick={() => scrollToHash("contact")}
                    >
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    );
}