import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="">
        <div className="container mx-auto mb-8 flex px-8 py-4 justify-between items-center">
          <Link to="/">
            <div className="flex gap-4 align-center ">
              <img
                src="/Port-logo-ico.png"
                alt=""
                className="rounded-full h-8"
              />
              <h2 className="font-bold text-2xl font-sans uppercase">codrex</h2>
            </div>
          </Link>
          <div className="resume px-2 md:py-2 rounded md:text-xl border-2 border-solid border-black-600 hover:bg-yellow-500">
            <Link to="https://drive.google.com/file/d/1CeXIclWOkorVXpC-y2k0mztAEEZRQEeC/view">
              CV <span className="hidden md:inline">/ Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
