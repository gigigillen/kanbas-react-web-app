import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";



export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div id="wd-modules">
      <ModulesControls />
      <br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">

      {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              {module.name}
              <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 2
            <LessonControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 1
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 2
              <LessonControlButtons />
            </li>
          </ul>
        </li> */}
      </ul>
    </div>
  );
}
