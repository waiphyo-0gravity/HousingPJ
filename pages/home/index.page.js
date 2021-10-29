import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import HomeBody from "./components/home-body/home-body";
import HomeHeaderImages from "./components/home-header-image/home-header-image";
import SubHeader from "./components/sub-header/sub-header";

const Home = _ => {
    return (
        <>
            <Head>
                <title>Home - Housing project</title>
            </Head>
            <Navbar/> 
            <HomeHeaderImages />
            <SubHeader />
            <HomeBody />
        </>
    )
}

export default Home;