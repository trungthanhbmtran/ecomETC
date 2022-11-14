import { slideImageData } from '../../../data/slideImageData'
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'
import { Card } from '@mui/material'


const SlideImages = () => {
    return (
        <Carousel
            autoPlay
            indicators={false}
            swipe
            cycleNavigation
            navButtonsAlwaysVisible={false}
            navButtonsAlwaysInvisible={false}
            draggable="false"
            animation="slide"
            height={800}
            interval={3000}
        >
            {
                slideImageData.map((item, i) => 
                    <Image key={i} src={item.imgPath} alt="index" layout='fill' draggable="false" />
                )
            }
        </Carousel>

    )
}
export default SlideImages