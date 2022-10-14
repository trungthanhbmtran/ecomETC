import Element from "../components/ginseng/element"
import Intro from "../components/ginseng/intro"
import OurEcoSystem from "../components/ginseng/ourecosystem"
import Uses from "../components/ginseng/uses"
import Layout from "../components/Layout"
import Banner from "../components/layoutpage/banner"

const GinSeng = () =>{
    return(
        <Layout>
            <Banner path='/XXx/banner-sam-ngoc-linh-03.jpg'/>
            <Intro/>
            <Element/>
            <Uses/>
            <OurEcoSystem/>
        </Layout>
    )
}

export default GinSeng