"use client";

import {FaHome, FaCode} from "react-icons/fa";
import {GrProjects} from "react-icons/gr";
import {BsFillTelephoneOutboundFill} from "react-icons/bs";

export default function Navigation() {
    /**
     * Function to scroll to specified element ID when a corresponding navigation item is clicked.
     * @param element_id
     */
    const scrollToHash = function (element_id: string) {
        const element = document.getElementById(element_id);

        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return (
        <div
            className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 pt-sm-4 text-white">
            <ul id="menu"
                className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start">
                <li className="nav-item">
                    <a href="#"
                       className="nav-link px-sm-0 px-2 text-white"
                       onClick={() => scrollToHash("home")}
                    >
                        <FaHome/>
                        <span className="ms-3 d-none d-sm-inline">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                       className="nav-link px-sm-0 px-2 text-white"
                       onClick={() => scrollToHash("techs")}
                    >
                        <FaCode/>
                        <span className="ms-3 d-none d-sm-inline">Skills</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                       className="nav-link px-sm-0 px-2 text-white"
                       onClick={() => scrollToHash("projects")}
                    >
                        <GrProjects/>
                        <span className="ms-3 d-none d-sm-inline">Projects</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                       className="nav-link px-sm-0 px-2 text-white"
                       onClick={() => scrollToHash("contact")}
                    >
                        <BsFillTelephoneOutboundFill/>
                        <span className="ms-3 d-none d-sm-inline">Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}