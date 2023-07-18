import Home from "./pages/home/Home";
// import Login from "./pages/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import AppView from "./AppView";
import LandingPage from "./pages/Landing";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return ( 
    <div className={darkMode ? "app dark" : "app"}>
      <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-screen space-y-8">
      {/* <Home/> */}
        <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} />
            <Route path="home" element={<Home/>} />
            <Route path="signup" element={<SignupPage/>} />
            <Route path="designer" element={<AppView/>} />
            <Route path ="admin" element={<LandingPage/>}/>
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
             <Route path="workflow" element={<AppView/>} /> 
         </Route>
         <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product"/>}              
               />
         </Route>
       </Route>
     </Routes>
   </BrowserRouter>
   </div>
   </div>
    </div>
  );
}

export default App;
