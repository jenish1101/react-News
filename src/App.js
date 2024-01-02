import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Newsitem from "./components/Newsitem";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

const App =()=>{
  const pagesize = 15;
  const country = "in";

  
const [progress, setprogress] = useState(0)

const [mode, setmode] = useState("light")

const toggle=()=>{
  if(mode=="light"){
    setmode("dark");
    document.body.style.backgroundColor = "grey";
  }
  else{
    setmode("light");
    document.body.style.backgroundColor="white";
  }
  
}

    return (
      <div>
        <Router>
          
        <LoadingBar color="#f11946" progress={progress}/>

        <Navbar mode={mode} toggle={toggle}/>

          <Routes>
            <Route exact path="/" element={
                <News setprogress={setprogress} key="general"
                  pagesize={pagesize}
                  country={country}
                  category={"General"}
                  mode={mode}
                />
              }
            ></Route>

            <Route exact path="/business" element={
                <News setprogress={setprogress} key="business"
                  pagesize={pagesize}
                  country={country}
                  category={"Business"}
                  mode={mode}
                />
              }
            ></Route>

            <Route exact path="/entertainment" element={
                <News setprogress={setprogress} key="entertainment"
                  pagesize={pagesize}
                  country={country}
                  category={"Entertainment"}
                  mode={mode}
                />
              }
            ></Route>

            <Route exact path="/general" element={
                <News setprogress={setprogress} key="general"
                  pagesize={pagesize}
                  country={country}
                  category={"General"}
                  mode={mode}
                />
              }
            ></Route>

            <Route exact path="/health" element={
                <News setprogress={setprogress} key="health"
                  pagesize={pagesize}
                  country={country}
                  category={"Health"}
                  mode={mode}
                />
              }
            ></Route>

            <Route exact path="/science" element={
                <News setprogress={setprogress} key="science"
                  pagesize={pagesize}
                  country={country}
                  category={"Science"}
                  mode={mode}
                />
              }
            ></Route>

            <Route exact path="/sports" element={
                <News setprogress={setprogress} key="sports"
                  pagesize={pagesize}
                  country={country}
                  category={"Sports"}
                  mode={mode}
                />
              }
            ></Route>

            <Route exact path="/technology" element={
                <News setprogress={setprogress} key="technology"
                  pagesize={pagesize}
                  country={country}
                  category={"Technology"}
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App;