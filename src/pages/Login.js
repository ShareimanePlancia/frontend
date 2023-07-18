import Header from "../components/Header"
import Login from "../components/Login"

export default function LoginPage(){
    return(
        <>

<div class="bg-gradient-to-tr from-yellow-200 to-pink-300 h-screen w-screen flex justify-center items-center">
    <div class="py-8 px-6 w-2/5 h-4/6 bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
             <Header
                heading="Log In"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
            </div>
        </div>
        </>
    )
}