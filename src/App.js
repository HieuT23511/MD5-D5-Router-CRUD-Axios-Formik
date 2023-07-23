import logo from './logo.svg';
import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ListStudent from "./pages/students/ListStudent";
import CreateStudent from "./pages/students/CreateStudent";
import EditStudent from "./pages/students/EditStudent";

function App() {
    return (
        <>
            <Outlet></Outlet>
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'/'} element={<ListStudent/>}></Route>
                    <Route path={'/create-student'} element={<CreateStudent/>}></Route>
                    <Route path={'/edit-student/:id'} element={<EditStudent/>}></Route>
                </Route>
                <Route path={'/admin'} element={<Admin/>}></Route>
                </Routes>
        </>
    );
}

export default App;
