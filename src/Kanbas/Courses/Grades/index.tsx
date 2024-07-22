import { TbFileImport } from "react-icons/tb";
import { TbFileExport } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function Grades() {
    const users = db.users;
    const enrollments = db.enrollments;
    const grades = db.grades;
    const assignments = db.assignments;
    const { cid } = useParams();

    // array of relevant students
    const enrolledStudents = enrollments
        .filter((enrollment) => enrollment.course === cid)
        .map((enrollment) => {
            const user = users.find((user) => user._id === enrollment.user);
            return user;
        });

    // array of assignments for selected course
    const courseAssignments = assignments.filter((assignment) => assignment.course === cid);

    return (
        <div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-long btn-secondary me-3">
                    <TbFileImport />
                    Import
                </button>
                <button className="btn btn-long btn-secondary me-3">
                    <TbFileExport />
                    Export
                </button>
                <button className="btn btn-short btn-secondary">
                    <IoMdSettings />
                </button>
            </div>
            <div className="row">
                <div className="col">
                    <h5><b>Student Names</b></h5>
                </div>
                <div className="col">
                    <h5><b>Assignment Names</b></h5>
                </div>
            </div>

            <div id="wd-grades-table">
                <table className="table">
                    <thead>
                        <tr className="table-light">
                            <th>Student Name</th>
                            {/* display the relevant assignments */}
                            {courseAssignments.map((assignment) => (
                                <th>
                                    {assignment.title}<br />
                                    out of 100
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* mapping the correct grades and students */}
                        {enrolledStudents.map((student : any) => (
                            <tr>
                                <td>{student.firstName} {student.lastName}</td>
                                {courseAssignments.map((assignment) => {
                                    const grade = grades.find((grade) => grade.student === student._id && grade.assignment === assignment._id);
                                    return (
                                        <td>{grade ? grade.grade : ""}</td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}



