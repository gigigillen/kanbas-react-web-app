export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/phil.jpg" width={200} />
          <div>
            <a className="wd-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS3423 Technology and Human Values
            </a>
            <p className="wd-course-title">
              Tech and Human Values
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div>
          <img src="/images/ux design.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              ARTG3493 Experience and Interaction Design
            </a>
            <p className="wd-dashboard-course-title">
              Experience and Interaction Design
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div>
          <img src="/images/anthr.webp" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              ANTH1101 Peoples and Cultures
            </a>
            <p className="wd-dashboard-course-title">
              Peoples and Cultures
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div>
          <img src="/images/arch.png" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              ARCH1310 Buildings and Cities
            </a>
            <p className="wd-dashboard-course-title">
              Buildings and Cities
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div>
          <img src="/images/crim.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CRIM1110 Criminal Due Process
            </a>
            <p className="wd-dashboard-course-title">
              Criminal Due Process
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div>
          <img src="/images/app.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS4520 Mobile App Development
            </a>
            <p className="wd-dashboard-course-title">
              Mobile App Development
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div>
          <img src="/images/web.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS5610 Web Development
            </a>
            <p className="wd-dashboard-course-title">
              Web Development
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

      </div>
    </div>
  );
}
