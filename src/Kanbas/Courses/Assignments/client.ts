import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const updateAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
  return response.data;
}

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(`${ASSIGNMENT_API}/${assignmentId}`);
  return response.data;
}

export const createAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.post(`${COURSES_API}/${assignment.id}`, assignment);
  return response.data;
}

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};
