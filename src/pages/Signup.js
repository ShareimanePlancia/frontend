import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <>
        <div class="bg-gradient-to-tr from-yellow-200 to-pink-300 h-screen w-screen flex justify-center items-center">
            <div class="py-8 px-6 w-2/5 bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
            <Header
              heading="Sign Up"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/home"
            />
            <Signup/>
            </div>
            </div>
        </>
    )
}