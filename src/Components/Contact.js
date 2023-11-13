import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <section className="mb-4 text-center">
        <h2 className="h1-responsive font-weight-bold my-4">Contact us</h2>
        <p className="mx-auto mb-5 w-responsive text-center">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="name">Your name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="email">Your email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label htmlFor="message">Your message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="text-center text-md-left">
                <button
                  className="btn btn-primary my-3"
                  onClick={() =>
                    document.getElementById("contact-form").submit()
                  }
                  style={{ position: "relative", left: "0" }}
                >
                  Send
                </button>
              </div>
              <div className="status"></div>
            </form>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Giza, Egypt</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 02 234 567 89</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>Click.market@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
