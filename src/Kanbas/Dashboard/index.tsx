import { Link } from "react-router-dom";
import * as db from "../Database";
import "./index.css";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {/* iterating through all courses */}
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              {/* make entire card clickable */}
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                {/* tempalte course */}
                <div className="card rounded-3 overflow-hidden">
                  <img src={course.image} height="{160}" alt={course.name} />
                  <div className="card-body">
                    <span className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold", maxHeight: 20, overflow: "hidden"}} >
                      {course.name}
                    </span>
                    {/* styling a max height so measurements are uniform despite content */}
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
