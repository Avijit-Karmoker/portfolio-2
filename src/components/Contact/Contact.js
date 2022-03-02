import React from "react";
import img from "../../images/myImage2.png";
import styles from "./Contact.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    const userInfo = { name: name, subject: subject, email: email, text: text };
    console.log(userInfo);
    event.preventDefault();
  };

  return (
    <section>
      <div>
        <div className="container">
          <div className={styles.contact}>
            <h2>Contact Me</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className={styles.image}>
                <img src={img} alt="MyImage" />
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div>
                <form onSubmit={handleSubmit}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "80%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      className={styles.field}
                      label="Name"
                      variant="standard"
                      value={name}
                      onChange={handleNameChange}
                    />
                    <TextField
                      id="standard-basic"
                      className={styles.field}
                      label="Subject"
                      variant="standard"
                      value={subject}
                      onChange={handleSubjectChange}
                    />
                    <TextField
                      id="standard-basic"
                      className={styles.field}
                      label="Email"
                      variant="standard"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <label htmlFor="message" className={styles.field} id={styles.label}>Message</label>
                    <textarea
                      name="textarea"
                      id={styles.sms}
                      cols="30"
                      rows="3"
                      value={text}
                      onChange={handleTextChange}
                    ></textarea>
                  </Box>
                  <button
                    type="submit"
                    value="Submit"
                    className={styles.submit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
