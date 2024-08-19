import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";


export default function Modules() {
  const navigate = useNavigate();
  const { cid } = useParams();

  //module itself needs to be handled in component
  const [moduleName, setModuleName] = useState("");

  //reducer only maintains array of modules, the state of the array
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  //UPDATE
  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  //DELETE
  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    fetchModules();
    navigate(`/Kanbas/Courses/${cid}/modules`)
  };


  //CREATE
  const createModule = async (module: any) => {
    const newModule = await client.createModule({
    });
    setModules([...modules, module]);
  };


  //get modules for course
  const fetchModules = async () => {
    const modules = await client.findModulesByCourse(cid as string);
    dispatch(setModules(modules));
  };


  //display upon load
  useEffect(() => {
    fetchModules();
  }, []);


  return (
    <div id="wd-modules">

      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={() => {
          //no longer need to dispatch
          createModule({ name: moduleName, course: cid });
          setModuleName("");
        }} />

      <br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">

        {modules
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">

                {/* not in editing mode, display module */}
                {!module.editing && module.name}

                {/* in editing mode, update module */}
                {module.editing && (
                  <input className="form-control w-50 d-inline-block" value={module.name}
                    onChange={(e) => saveModule({ ...module, name: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }} />
                )}

                <ModuleControlButtons moduleId={module._id}
                  deleteModule={(moduleId) => { removeModule(moduleId); }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />

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
      </ul>
    </div>
  );
}
