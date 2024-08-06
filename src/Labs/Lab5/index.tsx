import EncodingParametersinURLs from "./EncodingParametersinURLS";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import ModulePractice from "./ModulePractice";
import HttpClient from "./HttpClient";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";


export default function Lab5() {
    return (
        <div className="container-fluid">
            <h1>Lab 5</h1>
            <a href="http://localhost:4000/Lab5">
                Hello
            </a>
            <WorkingWithArraysAsynchronously />
            <hr />
            <WorkingWithObjectsAsynchronously />
            <hr />
            <HttpClient />
            <hr />
            <h2>Calculator</h2>
            <EncodingParametersinURLs />
            <hr />
            <WorkingWithArrays />
            <hr />
            <WorkingWithObjects />
            <hr />
            <ModulePractice />
            <hr />
        </div>
    )
}