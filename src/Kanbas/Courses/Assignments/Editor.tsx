import { IoCalendarOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { Link } from 'react-router-dom';


export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignments = db.assignments;
    const assignment = assignments.find((assignment) => assignment._id === aid);
    
    return (

        <div>
            <div id="wd-assignment-form">
                <div className="mb-3 row">
                    <label htmlFor="input1" className="form-label">
                        Assignment Name</label>
                    <input type="text" value={assignment?.title} className="form-control" />
                </div>
                <div className="mb-3 row">
                    <textarea className="form-control" id="textarea1"
                        rows={3}></textarea>
                </div>
                <div className="mb-3 row">
                    <div className="col-3 d-flex align-items-center justify-content-end">
                        <label htmlFor="input1" className="form-label">
                            Points</label>
                    </div>
                    <div className="col">
                        <input type="text" value="100" className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-3 d-flex align-items-center justify-content-end">
                        <label htmlFor="input1" className="form-label">
                            Assignment Group</label>
                    </div>
                    <div className="col">
                        <select className="form-select">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-3 d-flex align-items-center justify-content-end">
                        <label htmlFor="input1" className="form-label">
                            Display Grade as</label>
                    </div>
                    <div className="col">
                        <select className="form-select">
                            <option selected value="Percentage">PERCENTAGE</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-3 d-flex align-items-top justify-content-end">
                        <label htmlFor="input1" className="form-label">
                            Submission Type</label>
                    </div>
                    <div className="col">
                        <div className="mb-3 row">
                            <select className="form-select">
                                <option selected value="Online">ONLINE</option>
                            </select>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="input1" className="form-label">
                                Online Entry Options</label>
                        </div>
                        <div className="row mb-3">
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" htmlFor="r6">
                                    Text Entry </label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" htmlFor="r6">
                                    Website URL </label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" htmlFor="r6">
                                    Media Recordings </label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" htmlFor="r6">
                                    Student Annotation </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" htmlFor="r6">
                                    File Uploads </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-3 d-flex align-items-top justify-content-end">
                        <label htmlFor="input1" className="form-label">
                            Assign</label>
                    </div>
                    <div className="col">
                        <div className="row">
                            <h5>Assign to</h5>
                        </div>
                        <div className="row mb-3">
                            <input type="text" value="Everyone" className="form-control" />
                        </div>
                        <div>
                            <h5>Due</h5>
                        </div>
                        <div className="row">
                            <div className="input-group mb-3">
                                <input type="text" value={assignment?.due} className="form-control" />
                                <span className="input-group-text"><IoCalendarOutline /></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>Available From</h5>
                            </div>
                            <div className="col">
                                <h5>Until</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="input-group">
                                    <input type="date" className="form-control" value={assignment?.available_date} />
                                    <span className="input-group-text"><IoCalendarOutline /></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group">
                                    <input type="date" className="form-control" value={assignment?.due_date} />
                                    <span className="input-group-text">
                                        <IoCalendarOutline />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${assignment?.course}/Assignments`} className="btn btn-lg btn-secondary">
                    Cancel
                </Link>
                <Link to={`/Kanbas/Courses/${assignment?.course}/Assignments`} className="btn btn-lg btn-danger">
                    Save
                </Link>
            </div>
        </div>
    );
}
