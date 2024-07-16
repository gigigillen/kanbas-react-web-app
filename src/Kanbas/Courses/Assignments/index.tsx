import { AiOutlinePlus } from "react-icons/ai";
import "./index.css";
import SearchBar from "./SearchBar";
import { PiNotePencilThin } from "react-icons/pi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { LiaBrailleSolid } from "react-icons/lia";
import { RxTriangleDown } from "react-icons/rx";







export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="row">
        <div className="col">
          <SearchBar />
        </div>
        <div className="col">
          <button className="btn btn-lg group-button me-1">
            <AiOutlinePlus className="me-2 fs-5" />
            Group
          </button>

          <button className="btn btn-lg btn-danger text-white assignment-button">
            <AiOutlinePlus className="me-2 fs-5" />
            Assignment
          </button>
        </div>
        <div className="row mt-5">
          <div className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div>
                <LiaBrailleSolid className="fs-4" />
                <RxTriangleDown className="fs-8" />
                <span>ASSIGNMENTS</span>
              </div>
              <div>
                <button className="btn border border-dark fourty-percent">
                  40% of Total
                </button>
                <AiOutlinePlus className="me-2 fs-5" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
            <div className="wd-lessons list-group rounded-0">
              <div className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center green-left-border">
                <div>
                  <LiaBrailleSolid className="fs-4" />
                  <a href="#/Kanbas/Courses/1234/Assignments/123">
                    <PiNotePencilThin className="text-success me-4 fs-3" />
                  </a>
                </div>
                <div>
                  <h4><b>A1</b></h4>
                  <span className="text-danger">Multiple Modules</span>
                  <span className="ms-3 me-3">|</span>
                  <span>Multiple Modules</span>
                  <span className="ms-3 me-3">|</span>
                  <b>Not available until </b>
                  May 6 at 12:00am | <br></br>
                  <b>Due</b> May 13 at 11:59pm <span className="ms-3 me-3">|</span> 100pts
                </div>
                <div>
                  <LessonControlButtons />
                </div>
              </div>
              <div className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center green-left-border">
                <div>
                  <LiaBrailleSolid className="fs-4" />
                  <a href="#/Kanbas/Courses/1234/Assignments/123">
                    <PiNotePencilThin className="text-success me-4 fs-3" />
                  </a>
                </div>
                <div>
                  <h4><b>A2</b></h4>
                  <span className="text-danger">Multiple Modules</span>
                  <span className="ms-3 me-3">|</span>
                  <span>Multiple Modules</span>
                  <span className="ms-3 me-3">|</span>
                  <b>Not available until </b>
                  May 6 at 12:00am | <br></br>
                  <b>Due</b> May 13 at 11:59pm <span className="ms-3 me-3">|</span> 100pts
                </div>
                <div>
                  <LessonControlButtons />
                </div>
              </div>
              <div className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center green-left-border">
                <div>
                  <LiaBrailleSolid className="fs-4" />
                  <a href="#/Kanbas/Courses/1234/Assignments/123">
                    <PiNotePencilThin className="text-success me-4 fs-3" />
                  </a>
                </div>
                <div>
                  <h4><b>A3</b></h4>
                  <span className="text-danger">Multiple Modules</span>
                  <span className="ms-3 me-3">|</span>
                  <span>Multiple Modules</span>
                  <span className="ms-3 me-3">|</span>
                  <b>Not available until </b>
                  May 6 at 12:00am | <br></br>
                  <b>Due</b> May 13 at 11:59pm <span className="ms-3 me-3">|</span> 100pts
                </div>
                <div>
                  <LessonControlButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
