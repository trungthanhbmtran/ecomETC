import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Image from "next/image"
import Carousel from 'react-material-ui-carousel'
import CardComponent from "../../ContainerComponents/card"

const Newproducts = () => {
    const SlideImage = [
        { id: 1, imgPath: "/XXx/banner-sam-ngoc-linh-bac-phuc-02.jpg" },
        { id: 2, imgPath: "/XXx/banner-sam-ngoc-linh-bac-phuc.jpg" },
        { id: 3, imgPath: "/XXx/banner-sam-ngoc-linh-do-thi-ha.jpg" }
    ]
    return (
        <Container maxWidth="lg">
            <Typography align="center">
                SẢN PHẨM MỚI
                <br></br>
                <Image src="/XXx/line-1.png" width={129} height={20} layout="fixed" />
            </Typography>
            <Grid container direction='row' spacing={2}>
                <Grid item xs={12} md={6}>
                    <Carousel
                        autoPlay={false}
                        swipe={true}
                        indicators={true}
                        cycleNavigation={true}
                        fullHeightHover={false}
                        animation="fade"
                        height={500}
                        interval={3000}
                    >
                        {
                            SlideImage.map((item, i) => <Image key={i} src={item.imgPath} alt="index" layout='fill' />)
                        }
                    </Carousel>
                </Grid>
                <Grid item container xs={12} md={6} >
                    <Grid item  xs={12} md={12} >
                        <CardComponent pathImg="/XXx/banner-sam-ngoc-linh-do-thi-ha.jpg" />
                    </Grid>
                    <Grid item  xs={12} md={12} >
                        <CardComponent pathImg="/XXx/banner-sam-ngoc-linh-do-thi-ha.jpg" />
                    </Grid>
                </Grid>
                
            </Grid>

        </Container>

    )
}

export default Newproducts