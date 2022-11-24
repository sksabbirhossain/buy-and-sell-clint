import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`mb-5 ${styles.contact}`}>
      <div className="container">
        <h2 className="my-4 text-center">Contact Us</h2>
        <div className={styles.contactFrom}>
          <div className="row">
            <div className="offset-md-3 col-md-6">
              <div className="p-3">
                <Form>
                  <FormInput
                    label="Your Name"
                    pype="text"
                    placeholder="your name here"
                  />
                  <FormInput
                    label="Your Email"
                    pype="email"
                    placeholder="your email address"
                  />
                  <div className="mb-1">
                    <label htmlFor="">Your Message</label>
                  </div>
                  <textarea
                    name="desc"
                    className="form-control"
                    cols="30"
                    rows="4"
                    placeholder="write your messages"
                  ></textarea>
                  <div className="d-flex justify-content-center">
                    <Button className="mt-1 w-25">
                      Send{" "}
                      <span className="d-none d-lg-inline-block">
                        <FaArrowRight />
                      </span>
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
