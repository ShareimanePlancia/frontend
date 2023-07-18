import Header from "../components/Header";
import Landing from "../components/Landing";
import Signup from "../components/Signup";

export default function LandingPage(){
    return(
        <>
        <div class="bg-gradient-to-tr from-yellow-200 to-pink-300 h-screen w-screen flex justify-center items-center">
            <div class="py-8 px-6 w-2/5 bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
            <Header
              heading="LANDING PAGE"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Landing/>
            </div>
            </div>
        </>
    )
}