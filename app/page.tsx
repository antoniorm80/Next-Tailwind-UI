import Image from "next/image";
import HeroPage from "./Components/Heros";
import SigninPage from "./Components/SignIn";
import NotfoundPage from "./Components/Notfound";
import BadgesPage from "./Components/Badges";
import ListsPage from "./Components/Lists";
import FormLayoutPage from "./Components/Formlayout";
import ContentPage from "./Components/Content";
import NavbarPage from "./Navbar";
import DropdownPage from "./Components/Dropdown";
import StackedLayoutPage from './Components/StackedLayout';
import DrawersPage from './Components/Drawers'
import PageHeadingsPage from "./Components/PageHeadings";
import SelectMenuPage from "./Components/SelectMenu";
import ModalDialogsPage from "./Components/ModalDialogs";
import ContactSectionPage from "./Components/ContactSection";
import LogoCloudsPage from "./Components/LogoClouds";
import HeadersPage from "./Components/Headers";
import AvatarPage from "./Components/Avatar";
import InputGroupPage from "./Components/InputGroup";
import ProductListPage from "./Components/ProductList";
import CategoryPreviewPage from "./Components/CategoryPreview";
import TeamSectionsPage from "./Components/TeamSections";
import PromoSectionsPage from "./Components/PromoSections";
import ProductViewPage from "./Components/ProductView";
import ProductFeaturePage from "./Components/ProductFeatures";
import StoreNavigationPage from "./Components/StoreNavigation";
import ShoppingCartsPage from "./Components/ShoppingCarts";
import ProductOverviewsPage from "./Components/ProductOverviews";
import CategoryFilterPage from "./Components/CategoryFilters";
import HeaderSectionPage from "./Components/HeaderSection";
import BlogSectionsPage from "./Components/BlogSections";

export default function Home() {

  return (   
    <> 
    {/* <HeadersPage/>*/}
    <HeroPage/>
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
    <DropdownPage/>
      <FormLayoutPage/>
      <SelectMenuPage/>
      {/* <ModalDialogsPage/>  */}
      <InputGroupPage/>
     <ProductListPage/>
     <TeamSectionsPage/>
    </main>  
    <CategoryPreviewPage/>
    <PromoSectionsPage/>
    <ProductViewPage/>
    <ProductFeaturePage/>
    <StoreNavigationPage/>
    {/* <ShoppingCartsPage/>  */}
    <ProductOverviewsPage/>
    <CategoryFilterPage/>
    <HeaderSectionPage/>
    <BlogSectionsPage/>

    {/* <ContactSectionPage/> */}
    {/* 
      <main className="flex min-h-screen flex-col p-24 bg-white">
        <PageHeadingsPage/>        
      </main>  
    */}
    {/*
    <AvatarPage/>
    <StackedLayoutPage/>
    <DrawersPage/>
    <NavbarPage/>
    <ContentPage/>    
    <SigninPage/>
    <BadgesPage/>
    <ListsPage/>
    <FormLayoutPage/>
    <NotfoundPage/>
     <LogoCloudsPage/>
    */}   
    </>
  );
}
