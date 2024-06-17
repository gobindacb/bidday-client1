import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {

    const { googleLogin, githubLogin, twitterLogin } = UseAuth();

    // navigation after socialLogin
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    

    const handleSocialLogin = socialProvider => {
        socialProvider()
        .then(data =>{
            console.log(data)
            if(data?.user?.email){
                const userInfo = {
                    email: data?.user?.email,
                    fullName: data?.user?.displayName,
                    photoURL: data?.user?.photoURL
                }
                fetch(`${import.meta.env.VITE_API_URL}/user`, {
                    method: "POST",
                    headers : {
                        'Content-type':"application/json"
                    },
                    body : JSON.stringify(userInfo)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log('data', data);
                    localStorage.setItem('token', data?.token)
                });
            }
            if (data.user){
                toast.success('Sign in successfully!') 
                navigate(from, {replace: true});                
            }
            
        })
        .catch(error => {
            toast.error('Login Failed: ' + error.message); // Display error message
        });
    };

    return (
        <>
            <div className='divider'>Continue with</div>
            <div className='flex gap-2 justify-center items-center mb-4'>
                <button onClick={() =>handleSocialLogin(googleLogin)} className='btn btn-outline'>Google</button>
                {/* <button onClick={() =>handleSocialLogin(twitterLogin)} className='btn btn-outline'>Twitter</button>
                <button onClick={() =>handleSocialLogin(githubLogin)} className='btn btn-outline'>Github</button> */}
            </div>
        </>
    );
};

export default SocialLogin;