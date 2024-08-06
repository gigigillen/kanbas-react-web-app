import { AiOutlinePlus } from "react-icons/ai";
import "./index.css";
import SearchBar from "./SearchBar";
import { PiNotePencilThin } from "react-icons/pi";
import { IoEllipsisVertical } from "react-icons/io5";
import { LiaBrailleSolid } from "react-icons/lia";
import { RxTriangleDown } from "react-icons/rx";
import { useParams, } from "react-router";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { addAssignment, deleteAssignment, setAssignments } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import ConfirmationModal from "./ConfirmationModal";
import * as client from "./client";

export default function Assignments() {
  const { cid } = useParams();
  // const [assignments, setAssignments] = useState<any[]>(db.assignments);

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(assignment);
    dispatch(addAssignment(newAssignment))
  }

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  }


  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);


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

          <Link
            to={`/Kanbas/Courses/${cid}/assignments/new`}
            className="btn btn-lg btn-danger text-white assignment-button">
            <AiOutlinePlus className="me-2 fs-5" />
            Assignment
          </Link>

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

            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (<div className="wd-lessons list-group rounded-0">
                <div className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center green-left-border">
                  <div>
                    <LiaBrailleSolid className="fs-4" />
                    <a href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                      <PiNotePencilThin className="text-success me-4 fs-3" />
                    </a>
                  </div>
                  <div>
                    <h4><b>{assignment.title}</b></h4>
                    <span className="text-danger">Multiple Modules</span>
                    <span className="ms-3 me-3">|</span>
                    <span>Multiple Modules</span>
                    <span className="ms-3 me-3">|</span>
                    <b>Not available until </b>
                    {assignment.available} <br></br>
                    <b>Due</b> {assignment.due} <span className="ms-3 me-3">|</span> 100pts
                  </div>
                  <div>
                    <div className="float-end">
                      <FaTrash className="text-danger me-2 mb-1"
                        data-bs-toggle="modal"
                        data-bs-target="#delete-confirmation-modal" />
                      <GreenCheckmark />
                      <IoEllipsisVertical className="fs-4" />
                      <ConfirmationModal
                        assignmentId={assignment._id}
                        deleteAssignment={(assignmentId) => { removeAssignment(assignmentId); }}
                      />
                    </div>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </div>

    </div>
  );
}
