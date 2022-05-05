import React from "react";
import { useNavigate, Route, Routes } from 'react-router-dom';

//page
import Result from "./Result"
import Home from "./Home"

function App() {
    return (
        <Routes>
            <Route path = "/" element= {<Home/>}/>
            <Route path = "/result/:id" element={<Result />}/>
        </Routes>
    );
}

// ReactDOM.render(<YearPicker val={2002} />, document.getElementById('App'))

export default App;