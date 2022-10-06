import {Routes, Route, Router} from "react-router-dom";
import Home from "./pages/Home/Home";
import Survey from "./pages/Survey/Survey";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import Results from "./pages/Results/Results";
import Freelances from "./pages/Freelances/Freelances";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/survey/:questionNumber" element={<Survey/>}/>
                <Route path="/results" element={<Results/>}/>
                <Route path="/freelances" element={<Freelances/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>

        </div>
    )
}

export default App;
