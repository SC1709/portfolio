import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5">
                  <span className="text-tertiary">{key} : </span>
                  <span className="text-tertiary">{contact[key]}</span>
                </p>
              )
          )}
          <p className="text-tertiary">{"}"}</p>
        </div>
        
        <div className="h-[400px]">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sachinchoudhary97599@gmail.com">
          <dotlottie-player
            src="https://lottie.host/5bbaea3d-5573-4533-b12d-0d5a6d35f7cc/t5LxtQMreb.json"
            // src="https://lottie.host/3635d1b4-8aaa-4555-9309-05de833ecf1b/4PQUagg7jN.json"
            background="transparent"
            speed="0.75"
            loop
            autoplay
          ></dotlottie-player>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
