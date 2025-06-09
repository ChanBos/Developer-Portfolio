import {FaMobileRetro, FaLocationDot, FaGithub} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import {ImLinkedin} from "react-icons/im";
import ContactForm from "../components/contactForm";

export default function Contact() {
    return (
        <div id="contact" className="page-container p-4">
            <h3>Get in Touch</h3>
            <div className="row py-3">
                <div className="col-12 col-xl-4 mt-3 m-lg-0 order-1 order-xl-0">
                    <h5>Details:</h5>
                    <div className="d-table py-3">
                        <div className="d-table-row">
                            <div className="d-table-cell pt-0 pb-3 pe-2" style={{fontSize: "1.5rem"}}
                                 title="Contact Number"><FaMobileRetro/></div>
                            <div className="d-table-cell">071 866 6660</div>
                        </div>
                        <div className="d-table-row">
                            <div className="d-table-cell pt-0 pb-3 pe-2" style={{fontSize: "1.5rem"}} title="Email">
                                <MdEmail/></div>
                            <a className="d-table-cell"
                               href="mailto:scheeperschanelle@gmail.com">scheeperschanelle@gmail.com</a>
                        </div>
                        <div className="d-table-row">
                            <div className="d-table-cell pt-0 pb-3 pe-2" style={{fontSize: "1.5rem"}} title="GitHub">
                                <FaGithub/></div>
                            <a className="d-table-cell" href="https://github.com/ChanBos"
                               target="_blank">https://github.com/ChanBos</a>
                        </div>
                        <div className="d-table-row">
                            <div className="d-table-cell pt-0 pb-3 pe-2" style={{fontSize: "1.5rem"}} title="LinkedIn">
                                <ImLinkedin/></div>
                            <a className="d-table-cell" href="https://www.linkedin.com/in/chanelle-bosiger"
                               target="_blank">https://www.linkedin.com/in/chanelle-bosiger</a>
                        </div>
                        <div className="d-table-row">
                            <div className="d-table-cell pt-0 pb-3 pe-2" style={{fontSize: "1.5rem"}} title="Location">
                                <FaLocationDot/></div>
                            <div className="d-table-cell">Durban, KwaZulu-Natal, South Africa</div>
                        </div>
                    </div>
                    <h5>Send me an email:</h5>
                    <ContactForm/>
                </div>
                <div className="col-12 col-xl-8 d-xl-flex justify-content-center align-items-center order-0 order-xl-1 px-0 pb-3 pb-xl-0 px-xl-5">
                    <img src="assets/images/Contact.png" alt="Contact Me" className="img-fluid h-auto w-100"/>
                </div>
            </div>
        </div>
    );
}