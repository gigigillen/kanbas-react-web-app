import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

const initialState = {
    assignments: [],
  };
  


const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
          },
      

        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                name: assignment.name,
                points: assignment.points,
                dueDate: assignment.dueDate,
                from: assignment.from,
                until: assignment.until
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },

        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            )
        },

        updateAssignment: (state, {payload: assignment}) => {
            state.assignments = state.assignments.map((a: any) =>
            a._id === assignment._id ? assignment : a
            ) as any;
        },
    }



})


export const { addAssignment, deleteAssignment, updateAssignment, setAssignments} =
    assignmentSlice.actions;

export default assignmentSlice.reducer;