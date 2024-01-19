import React, { useState, useEffect, useContext, Suspense, lazy } from "react";

import "./Project.scss";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
import sundras from "../projects/sundras.PNG";
import fimg from "../projects/fimg.PNG"
import "./style.css";
const Projects = () => {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );

  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);

  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then((response) => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <div class="project" id="project">
      <div class="max-width">
        <h2 class="title">Projects</h2>
        <br></br>
        <div class="carousel owl-carousel">
          <div class="card">
            <div class="box">
              <img src={sundras} width="40%" alt="" />
              <div class="text">Sundaras Application</div>
              <p></p>
              <p class="techStack" id="tec">
                Tech Used: HTML, CSS, JavaScript, React, Redux, MongoDB,
                Style-components
              </p>
              <div class="repo-links">
                <div class="repo-div">
                  <span>
                    {" "}
                    <a
                      href="https://github.com/swatisaulanki/SundarasOnline_Projects"
                      target="_blank"
                    >
                      {" "}
                      Git Repo{" "}
                    </a>
                  </span>
                </div>
                <div class="demo-div">
                  <span>
                    {" "}
                    <a
                      href="https://sundaras-online-projects.vercel.app/"
                      target="_blank"
                    >
                      {" "}
                      Live Site{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUV48lb_zBm1H2IMYjQIDziZwO6PF4O3psQ&usqp=CAU"
                width="40%"
                alt=""
              />
              <div class="text">Blog Application</div>
              <p></p>
              <p class="techStack" id="tec">
                Tech Used: HTML, CSS, JavaScript, React, Redux, Style-Components
                ExpressJs, MongoDB, NodeJS
              </p>
              <div class="repo-links">
                <div class="repo-div">
                  <span>
                    {" "}
                    <a href="" target="_blank">
                      {" "}
                      Git Repo{" "}
                    </a>
                  </span>
                </div>
                <div class="demo-div">
                  <span>
                    {" "}
                    <a href="#" target="_blank">
                      {" "}
                      Live Site{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="box">
              <img src={fimg} alt="" />
              <div class="text">code </div>
              <p></p>
              <p class="techStack" id="tec">
                Tech Used: HTML, CSS, JavaScript, React, Redux, MongoDB,
                ExpressJs, NodeJs
              </p>
              <div class="repo-links">
                <div class="repo-div">
                  <span>
                    {" "}
                    <a href="" target="_blank">
                      {" "}
                      Git Repo{" "}
                    </a>
                  </span>
                </div>
                <div class="demo-div">
                  <span>
                    {" "}
                    <a href="" target="_blank">
                      {" "}
                      Live Site{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com/swatisaulanki" target="_blank">
        <Button
          text={"More Projects"}
          className="project-button"
          newTab={true}
        />
      </a>
    </div>
  );
};

export default Projects;
