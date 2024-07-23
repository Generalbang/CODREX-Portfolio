import React from "react";
import Header from "./Header";
import Social from "./Social";

function PageNotFound() {
  return (
    <div className="h-screen">
      <Header />
      <div className="text-center text-bold font-mono text-3xl h-4/5 flex items-center justify-center">
        <div>Page Not Found</div>
      </div>
      <Social />
    </div>
  );
}

export default PageNotFound;
