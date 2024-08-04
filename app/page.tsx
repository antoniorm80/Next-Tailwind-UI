import Image from "next/image";
import HeroPage from "./Components/Heros";
import SigninPage from "./Components/SignIn";
import NotfoundPage from "./Components/Notfound";
import BadgesPage from "./Components/Badges";
import ListsPage from "./Components/Lists";
import FormLayoutPage from "./Components/Formlayout";
import ContentPage from "./Components/Content";


export default function Home() {
  return (   
    <> 
    <HeroPage/>
    <ContentPage/>
    {/* 
    <SigninPage/>
    <BadgesPage/>
    <ListsPage/>
    <FormLayoutPage/>
    <NotfoundPage/>
    */}
    </>
   
    
  );
}
