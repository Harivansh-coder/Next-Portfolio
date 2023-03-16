import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import userData from "../constants/data";
import contactUs from "../lib/contactUs";
import { validationSchema } from "../lib/validation";

export default function Contact() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: {
    name: string;
    email: string;
    message: string;
  }) => {
    validationSchema
      .validate(e)
      .then((res) => {
        contactUs(e);
      })
      .then(() => {
        alert("Message sent successfully");
        setData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-6">
        <div className="flex flex-wrap justify-center items-center p-5">
          <div className="basis-1/4 mt-5 ">
            <header className="">
              <h1 className="text-gray-700  dark:text-white font-semibold text-2xl">
                Get in touch, let&apos;s talk.
              </h1>
              <p className="font-light text-base text-gray-800  dark:text-white mt-2">
                Fill in the details and I&apos;ll get back to you as soon as I
                can.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-10 gap-3">
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-700  dark:text-white font-light text-sm">
                  {userData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-gray-700  dark:text-white font-light text-sm">
                  {userData.address}
                </p>
              </div>
            </div>
            <div className="social-icons flex flex-row space-x-8"></div>
          </div>
          <div className="basis-2/4 min-w-fit">
            <form className="form rounded-lg bg-gray-100 p-5 grid grid-cols-3 gap-4">
              <TextField
                className="col-span-3"
                id="name"
                type={"text"}
                label="Name"
                size="small"
                variant="outlined"
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />

              <TextField
                className="col-span-3"
                id="email"
                type={"email"}
                label="Email"
                size="small"
                variant="outlined"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />

              <TextField
                className="col-span-3"
                id="message"
                type={"text"}
                label="Message"
                size="small"
                variant="outlined"
                value={data.message}
                onChange={(e) => {
                  setData({ ...data, message: e.target.value });
                }}
              />

              <Button
                className="col-span-1 col-start-2  hover:bg-gray-500  text-white font-bold py-2 px-4 rounded"
                variant="contained"
                style={{ backgroundColor: "#02044A" }}
                size="medium"
                onClick={() => {
                  handleSubmit(data);
                }}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
