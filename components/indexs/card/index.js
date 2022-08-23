
import { Button, Card, CardMedia, CardContent, Grid, Typography, Modal, Box } from '@mui/material';
// import CardComponent from './card';
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import useModal from '../../../hooks/useModal';
import BasicModal from '../../modal';
import DiaLogWrapper from '../../modal/dialog'
import useDialogModal from '../../../hooks/useDialogModal';
// import Link from '../../../lib/Link';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const products = [
    {
        id: 1,
        name: "Super Backpack",
        price: 129.99,
        description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
        image: "/images/products/bag_01.png"
    },
    {
        id: 2,
        name: "New Hip",
        price: 199.99,
        description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
        image: "/images/products/bag_02.png"
    },
    {
        id: 3,
        name: "Elite Series",
        price: 189.99,
        description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
        image: "/images/products/bag_03.png"
    },
    {
        id: 4,
        name: "Casual",
        price: 129.99,
        description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
        image: "/images/products/bag_04.png"
    },
    {
        id: 5,
        name: "Best Tote",
        price: 399.99,
        description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
        image: "/images/products/bag_05.png"
    },
    {
        id: 6,
        name: "Charming Series",
        price: 689.99,
        description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
        image: "/images/products/bag_06.png"
    }
]

const ActionAreaCard = () => {
    return (
        <div style={{ marginTop: "50px", color: "#494949" }}>
            <Carousel
                className="Example"
                next={(now, previous) => console.log(`Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                prev={(now, previous) => console.log(`Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}

                // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                // indicatorContainerProps={{style: {margin: "20px"}}}
                indicators={false}
                swipe={true}
                autoPlay={false}
                navButtonsAlwaysInvisible
            >
                {
                    products.map((item, index) => {
                        return <Banner item={item} key={index} />
                    })
                }
            </Carousel>
            <br />
        </div>
    );
}

const Banner = ({ item }) => {
    console.log('item',item);
    const [open, setOpen] = useModal(false);
    
    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                            <Grid item xs={4} key={item.Name}>
                                <CardMedia
                                    className="Media"
                                    sx={{ height: '300px' }}
                                    image={item.image}
                                    title={item.name}
                                >
                                    <Typography className="MediaCaption" color='Yellow'>
                                        {item.Name}
                                    </Typography>
                                    <Button variant="contained" className="ViewButton" onClick={() => alert(item.Name)}>
                                        Chi tiết
                                    </Button>
                                    <Button variant="contained" className="ViewButton" onClick={setOpen}>
                                        Chi tiết
                                    </Button>
                                </CardMedia>
                                {/* <CardComponent tittle={props.item.Name} ></CardComponent> */}
                                <BasicModal open={open} togle={setOpen} product={item}  />
                            </Grid> 
            </Grid>
            {/* <BasicModal open={open} togle={setOpen} image={item.Image} title={item.Name}/> */}
        </Card>

    )
}


export default ActionAreaCard