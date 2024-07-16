export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
         <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"></a>
              <img src="/images/phil.jpg" width="100%"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS3423 Technology and Human Values
                </h5>
                <p className="card-text">
                  Technology and Human Values
                </p>
                <a href="#/Kanbas/Courses/1234/Home">
                  <button className="btn btn-primary"> Go </button>
                </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"></a>
              <img src="/images/ux design.jpg" width="100%"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  ARTG3493 Experience and Interaction Design
                </h5>
                <p className="card-text">
                  Experience and Interaction Design
                </p>
                <a href="#/Kanbas/Courses/1234/Home">
                  <button className="btn btn-primary"> Go </button>
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"></a>
              <img src="/images/anthr.webp" width="100%"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  ANTH1101 Peoples and Cultures
                </h5>
                <p className="card-text">
                 Peoples and Cultures
                </p>
                <a href="#/Kanbas/Courses/1234/Home">
                  <button className="btn btn-primary"> Go </button>
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"></a>
              <img src="/images/arch.png" width="100%"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  ARCH1310 Buildings and Cities
                </h5>
                <p className="card-text">
                  Buildings and Cities
                </p>
                <a href="#/Kanbas/Courses/1234/Home">
                  <button className="btn btn-primary"> Go </button>
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"></a>
              <img src="/images/crim.jpg" width="100%"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                CRIM1110 Criminal Due Process
                </h5>
                <p className="card-text">
                Criminal Due Process
                </p>
                <a href="#/Kanbas/Courses/1234/Home">
                  <button className="btn btn-primary"> Go </button>
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"></a>
              <img src="/images/app.jpg" width="100%"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                 CS4520 Mobile App Development
                </h5>
                <p className="card-text">
                  Mobile App Development
                </p>
                <a href="#/Kanbas/Courses/1234/Home">
                  <button className="btn btn-primary"> Go </button>
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"></a>
              <img src="/images/web.jpg" width="100%"/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5610 Web Development
                </h5>
                <p className="card-text">
                  Web Development
                </p>
                <a href="#/Kanbas/Courses/1234/Home">
                  <button className="btn btn-primary"> Go </button>
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
