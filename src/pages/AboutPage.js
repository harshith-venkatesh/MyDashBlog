import React from "react";
import "../App.css";
const AboutPage = () => {
  return (
    <React.Fragment
      onClick={(event) =>
        (window.location.href = "http://github.com/Harshi7016")
      }
    >
      <header class="site-header">
        <img
          class="image-header"
          src="https://lh3.googleusercontent.com/Kt_QMtQaIWjzLofXBh0Z8uqe7d6kFfezU2kXNoI-6SDxwnKJ_RPZi5n0o4Aqs9r0rN1KzPY7-Pnh3jvWL1GjyFw3iSrImCFciO1r1WFuWclSb9sGUnFnDzzInqFBLtTxcAnUiHYCQ7zf4SJk3SQPLJJ56NTvobJjvsZ5HEKr6JJfLtmCZ0241QSdcX2KoxLXd34BmLoiVmbPcVtVQXHoFYebPlBHX94I0TKYqwcyJAsr8oniiyoo3ZkUlJEgVd_YgFiQbNzk26kUtKAbsPiVIaOmGYNWxiMNb3YB1T6-q9p7ywIX0q8pzwVHG1v9LZGjlIDHtjHxBWnOp65NFc0Mnn1a2Rfd5yo8iR8zvl0SS7E3wKDg9aeVp-DZLuysACzH052bFZe5IJC06bu1P_QDLLbgXkdltnjOxuKGEV8KzUNEDG1hlKdQmtU66bCKHg32-jqQX0XcAaU0Asx_Xh6l--f5VpnLw2KrIT-4sfVi3Tb7NoqVnrYcyC0WAIDRRCVvWJ2u7bBDA53ujHIxujy-IYaZ19gojMGfQxXCQD4Qpc1AuNJHdCLOA8cEqMM39yjGlU45IgjDfbJHtvE4pAnjZVjJrdXihXqW_BhA4EU9EGvaLfXBTjnxOljSEK0xcmn_-D9w1VgYrfQd64IlawORQzsRXZrqbJCS89FnOy1lQLZqQ3nAC4ZocpOv46_wXj0=s223-no"
        />
        <div class="site-header-content">
          <h1>
            Hi I am Harshith Venkatesh currently working in Centurylink India
            Private Limited
          </h1>
          <h3>I am skilled at Angular,React and NodeJs</h3>
          <h4>
            I am learning full stack development. watch this space for upcoming
            projects
          </h4>
          <h5>
            If you want to learn with me join the course
            <a
              href="http://github.com/Harshi7016"
              class="course-link"
              target="_blank"
            >
              here
            </a>
          </h5>
        </div>
      </header>
    </React.Fragment>
  );
};

export default AboutPage;
