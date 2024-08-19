import { deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function ConfirmationModal({assignmentId, deleteAssignment} :
    {assignmentId: string,
    deleteAssignment: (assiassignmentId: string) => void}) {
    return (
        <div id="delete-confirmation-modal" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div>
                    <div className="modal-header">
                        <h1> Are you sure? </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" 
                        onClick={() => deleteAssignment(assignmentId)}
                        >
                            Yes </button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel </button>
                    </div>
                </div>
            </div>
        </div>
    );

}