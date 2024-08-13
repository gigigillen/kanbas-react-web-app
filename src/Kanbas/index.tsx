import Dashboard from './Dashboard';
import KanbasNavigation from './Navigation'
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import { useEffect, useState } from 'react';
import * as client from "./Courses/client";
import store from "./store";
import { Provider } from "react-redux";
import Account from './Courses/Account';
import Session from './Courses/Account/Session';
import ProtectedRoute from './Courses/Account/ProtectedRoute';
import { useNavigate} from "react-router";

//entry point to kanbas application
export default function Kanbas() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<any[]>([]);

  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };

  //on load
  useEffect(() => {
    fetchCourses();
  }, []);


  //boiler plate course
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });

  //CONVERT TO AN ASYNC FUNCTION
  // const addNewCourse = async () => {
  //   const newCourse = await client.createCourse(course);
  //   setCourses([...courses, newCourse]);
  // };

  const addNewCourse = async () => {
    const course = await client.createCourse({
    });
    setCourses([...courses, course]);
  }


  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    fetchCourses();
    navigate(`/Kanbas/Dashboard`);
  };

  //CONVERTTED TO ASYNC
  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };





  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas">
          <KanbasNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account/*" element={<Account />} />
              <Route path="Dashboard" element={
                //only displays dashboard if you're logged in
                // <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                // </ ProtectedRoute>
              }
              />
              <Route
                path="Courses/:cid/*"
                element={
                  <ProtectedRoute>
                    <Courses courses={courses} />
                  </ProtectedRoute>
                } />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </Session>
    </Provider>
  );
}
