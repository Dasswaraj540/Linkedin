import Head from 'next/head';
import Profile from '../components/LeftSide/Profiles';
import Navbar from "../components/Navbar/Navbar";
import Feed from '../components/Posts/Feed';
import FeedPage from '../components/Posts/FeedPage';
import WriteAPost from '../components/Posts/WriteAPost';
import Job from '../components/RightSide/Job';
import { auth } from '../firebase';

function Home() {

  return (
    <div>
      <Head>
        <title>LinkedIn | Home</title>
        <link rel="icon" href="/linkedin_ico.ico" />
      </Head>
      <div className='bodyNavbar'>
        <Navbar />
      </div>
      <div className="bodyMains">
        <div className="profileBody">
          <Profile />
        </div>
        <div className="postBody">
          <WriteAPost />
          <FeedPage />
        </div>
        <div className="newsBody">
          <Job />
        </div>
      </div>

    </div>
  )
}

export default Home;