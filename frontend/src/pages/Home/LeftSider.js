import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sachinchoudhary97599@gmail.com" target="_blank" rel="noreferrer">
            {" "}
            <i
              class="fa-solid fa-envelope text-gray-400 text-xl"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://www.instagram.com/sachin_0917?igsh=N2dzb3RhMmdxbnJy "
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i
              class="fa-brands fa-instagram text-gray-400 text-xl"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://www.facebook.com/share/4hY488XoX17fBFd5/?mibextid=qi2Omg"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i
              class="fa-brands fa-facebook text-gray-400  text-xl"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sachin-choudhary-661a44256 "
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i
              class="fa-brands fa-linkedin text-gray-400 text-xl"
              aria-hidden="true"
            ></i>
          </a>
          <a href="https://github.com/SC1709" target="_blank" rel="noreferrer">
            {" "}
            <i
              class="fa-brands fa-github text-gray-400 text-xl "
              aria-hidden="true"
            ></i>
          </a>
          {/* <a href="https://sachin-choudhary.onrender.com/admin-login" target="_blank" rel="noreferrer">
            {" "}
            <i class="fa-solid fa-user-tie text-gray-400 text-xl" aria-hidden="true"></i>
            
          </a> */}
        </div>
        <div className="w-[1px] h-52 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
