import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import ConfirmationModal from "./ConfirmationModal";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1"
                data-bs-toggle="modal"
                data-bs-target="#delete-confirmation-modal" />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    )

}