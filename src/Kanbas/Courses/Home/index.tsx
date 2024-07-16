import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home">
      <div className="row">
        <div className="col">
          <Modules />
        </div>
        <div className="col-4 d-none d-lg-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
