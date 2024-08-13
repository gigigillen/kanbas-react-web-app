import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const MODULES_API = `${REMOTE_SERVER}/api/modules`;

// export const findModulesByCourse = async (courseId: string) => {
//     const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
//     return response.data;
// };

export const findModulesByCourse = async (number: string) => {
    const response = await axios.get(`${MODULES_API}`);
    return response.data;
};
  


//create a module for this course
export const createModule = async (module: any) => {
    // Make a POST request to the API to create a new module for the specified course
    //post(location, thing we're posting)
    const response = await axios.post(`${MODULES_API}`, module);

    // Return the data from the response
    return response.data;
};
  

//DELETE
export const deleteModule = async (moduleId: string) => {
    const response = await axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
};

  

//UPDATE
export const updateModule = async (module: any) => {
    const response = await axios.put(`${MODULES_API}/${module._id}`, module);
    return response.data;
};

  



