import '../styles/globals.css';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import Login from '../components/Login/Login';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  const [user] = useAuthState(auth);
  const router = useRouter();

  if(!user){
    return <Login />
  }

  // useEffect(() => {
  //   if(!user){
  //     router.push("/login");
  //   }
  //   else{
  //     router.push("/");
  //   }
    
  // }, [])

  return <Component {...pageProps} />
}

export default MyApp
