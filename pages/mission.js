import Layout from "../components/Layout"
import Banner from "../components/layoutpage/banner"
import BussinessPhilosophy from "../components/missions/bussinessphilosophy"
import SocialActivities from "../components/missions/socialactivities"
import Vision from "../components/missions/vision"

const Mission = () =>{

    return(
       <Layout>
            <Banner path='/XXx/banner-trach-nhiem-xa-hoi-02.jpg' />
            <Vision/>
            <BussinessPhilosophy/>
            <SocialActivities/>
            {/* <TabsComponent page='about' ArrayTabs={ArrayTabs} /> */}
        </Layout>  
    )
}

export default Mission