import React from "react";

const Home = () => {
  return (
    <div className="global-container glassmorphism mb-6">
      <div className=" flex justify-between items-center pt-10">
        {/* Software Developer in Test */}
        <div>
          <h2 className="  font-mono pt-5 lg:text-2xl md:text-2xl sm:text-xl font-bold">
            Software Test Automation Engineer
          </h2>
          <div className=" font-mono pt-5 pb-10 ">
            <ul className="pb-2">
              {" "}
              🎓 Graduated in 2021 with a Computer Engineering Bachelors degree.
            </ul>
            <ul className="pb-2">
              {" "}
              🗡 As a passionate Test Automation Enthusiast, I specialize in
              cutting-edge technologies and testing frameworks.
            </ul>
            <ul className="pb-2">
              {" "}
              🔍 Explore my latest projects and contributions on my{" "}
              <a
                href="https://github.com/shilCode"
                className=" underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              .
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
