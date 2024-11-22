import React, { useState } from "react";
import EmailIcon from "../../assets/email_icon.png";
import LinkedinIcon from "../../assets/linkedin_icon.png";
import PhoneIcon from "../../assets/phone_volume_icon.png";
import GithubIcon from "../../assets/github.png";
import SendIcon from "../../assets/send-icon.png";
import FilesList from "./FilesList.jsx";
import { toast, ToastContainer } from "react-toastify";
import "../../ReactToastify.css";
import axios from "axios";

const defaultFormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const Contact = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [files, setFiles] = useState([]);
  const { name, email, subject, message } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onFileUpload = (e) => {
    const choosenFiles = Array.prototype.slice.call(e.target.files);
    const uploaded = [...files];
    choosenFiles.forEach((f) => {
      if (uploaded.findIndex((file) => f.name === file.name) === -1) {
        uploaded.push(f);
      }
    });
    setFiles(uploaded);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    console.log("here");
    console.log("formdata: ", formData);
    try {
      const response = await axios.post(
        `https://email-server-0iro.onrender.com/send-email`,
        formData
      );
      // const response = await axios.post(
      //   `http://localhost:8080/send-email`,
      //   formData
      // );
      const data = response.data;
      console.log("data: ", data);
      if (data.status === 200) {
        toast.success(data.message, { position: toast.POSITION.TOP_RIGHT });
      } else {
        toast.error(data.message, { position: toast.POSITION.TOP_RIGHT });
      }
    } catch (error) {
      toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
    }
    resetForm();
  };
  const updateFileList = (newFilesList) => {
    setFiles(newFilesList);
  };
  const resetForm = () => {
    setFormFields(defaultFormFields);
    setFiles([]);
  };
  return (
    <section id="contact" className="mt-32 scroll-mt-20">
      <div className="flex flex-col space-y-10 p-10 mx-auto">
        {/* Title */}
        <div className="text-3xl md:text-4xl font-semibold underline  text-start  ">
          Contact
        </div>
        {/* Contact Container */}
        <div className="flex flex-col md:flex-row space-y-20 p-10 md:space-y-0 justify-center md:space-x-20 md:items-start rounded-xl bg-gray-100 dark:bg-darkBlue3">
          {/* Basic Info */}
          <div className=" w-full flex flex-col justify-center items-center text-center md:items-start md:content-start space-y-4 rounded-xl  ">
            <p className="font-semibold text-xl">Duyen Tran</p>
            <div>
              <img
                src={EmailIcon}
                alt="email-icon"
                className="w-6 h-6 rounded-full inline"
              />{" "}
              <span className="font-semibold">Email:</span>{" "}
              duyen.tran@outlook.com
            </div>
            <div>
              <img
                src={PhoneIcon}
                alt="email-icon"
                className="w-6 h-6 rounded-full inline"
              />{" "}
              <span className="font-semibold">Phone:</span> +1 443 301 3648
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/duyentth"
                className="cursor-pointer hover:text-accentCyan"
                target="_blank"
              >
                <img
                  src={GithubIcon}
                  alt="email-icon"
                  className="w-6 h-6 rounded-full inline"
                />{" "}
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/duyen-th-tran"
                className="cursor-pointer hover:text-accentCyan"
                target="_blank"
              >
                <img
                  src={LinkedinIcon}
                  alt="email-icon"
                  className="w-6 h-6 rounded-full inline"
                />{" "}
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <form
              encType="multipart/form-data"
              onSubmit={sendEmail}
              className="w-full rounded-xl  flex flex-col justify-center items-center space-y-12 md:items-start"
            >
              {/* Name */}
              <div className="relative w-full">
                <input
                  type="text"
                  className=" peer/name focus:outline-none bg-gray-100 dark:bg-darkBlue3  w-full border-b border-accentCyan"
                  name="name"
                  value={name}
                  id="name"
                  required
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className={`font-light absolute input-lable left-0 text-darkViolet dark:text-white peer-focus/name:bottom-10  ${
                    name.length > 0 ? " bottom-10 " : "bottom-2"
                  }`}
                >
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative w-full">
                <input
                  type="email"
                  className=" w-full peer/email focus:outline-none bg-gray-100 dark:bg-darkBlue3  border-b border-accentCyan"
                  name="email"
                  value={email}
                  required
                  id="email"
                  onChange={handleChange}
                />
                <label
                  htmlFor="email"
                  className={`font-light absolute left-0 text-darkViolet dark:text-white peer-focus/email:bottom-10 ${
                    email.length ? "bottom-10" : "bottom-2 "
                  }`}
                >
                  Email
                </label>
              </div>

              {/* Subject */}
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full peer/subject focus:outline-none bg-gray-100 dark:bg-darkBlue3  border-b border-accentCyan"
                  name="subject"
                  value={subject}
                  required
                  id="subject"
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className={`font-light absolute input-lable left-0 text-darkViolet dark:text-white  peer-focus/subject:bottom-10
                  ${subject.length > 0 ? "bottom-10" : "bottom-2"}`}
                >
                  Subject
                </label>
              </div>

              {/* Message */}
              <div className="relative w-full">
                <textarea
                  rows={4}
                  className=" w-full peer/subject  focus:outline-none bg-gray-100 dark:bg-darkBlue3 border-b border-accentCyan"
                  name="message"
                  value={message}
                  required
                  id="message"
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className={` font-light absolute input-lable  left-0 text-darkViolet dark:text-white  peer-focus/subject:-top-6
                  ${message.length > 0 ? "-top-6" : "bottom-4"}`}
                >
                  Message
                </label>
              </div>

              {/* File Attachment */}

              <div className="flex flex-col space-y-1 w-full border-b border-b-accentCyan">
                <input
                  type="file"
                  onInput={onFileUpload}
                  multiple
                  accept="image/*, .pdf,.doc,.docx "
                  size={1024 * 1000}
                />
                <label className="opacity-50 italic">
                  Accepted files: images, .pdf, .doc, .docx
                </label>
              </div>
              {files && (
                <FilesList
                  uploadedFiles={files}
                  updateFileList={updateFileList}
                />
              )}

              {/* Send Email button */}
              <button
                type="submit"
                className=" group w-full flex items-center text-center  justify-center rounded-lg ring-1 ring-accentCyan bg-accentCyan text-white hover:bg-gray-50 hover:text-darkViolet hover:scale-105 shadow-xl  px-4 py-2  font-semibold tracking-widest "
              >
                Send
                <img
                  src={SendIcon}
                  alt=""
                  className="w-6 h-6 ml-2 group-hover:translate-x-2 duration-200"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </section>
  );
};

export default Contact;
