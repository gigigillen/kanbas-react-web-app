import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Grades from "./Grades";
import { Route, Routes, useParams, useLocation } from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
//deconstruct
// import { courses } from "../Database";


export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {/* only renders if course is defined (course != null) */}
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="row">
        <div id="wd-course-navigation" className="col-2 d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="col">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
