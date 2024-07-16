import { TbFileImport } from "react-icons/tb";
import { TbFileExport } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";




export default function Grades() {
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
                            <th>
                                A1 SETUP<br></br>
                                out of 100
                            </th>
                            <th>
                                A2 HTML<br></br>
                                out of 100
                            </th>
                            <th>
                                A3 CSS<br></br>
                                out of 100
                            </th>
                            <th>
                                A4 BOOTSTRAP<br></br>
                                out of 100
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table">
                            <td>Jon Doe</td>
                            <td><input type="text" className="form-control" defaultValue="100%" /></td>
                            <td>99%</td>
                            <td>85%</td>
                            <td>33%</td>
                        </tr>
                        <tr className="table">
                            <td>Carry Will</td>
                            <td>100%</td>
                            <td>99%</td>
                            <td>85%</td>
                            <td>33%</td>
                        </tr>
                        <tr className="table">
                            <td>John Harry</td>
                            <td>100%</td>
                            <td>99%</td>
                            <td>85%</td>
                            <td>33%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}