
import { Button, Card, CardMedia, Grid, Typography,Modal,Box } from '@mui/material';
// import CardComponent from './card';
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import useModal from '../../../hooks/useModal';
import BasicModal from '../../modal';
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

const items = [
    {
        Name: "Electronics",
        Caption: "Electrify your friends!",
        contentPosition: "left",
        Items: [
            {
                Name: "Thí nghiệm định kỳ nhà máy thủy điện Sereepok 4A",
                Image: "/images/workdone/serepoke4.png"
            },
            {
                Name: "Hệ thống NLMT Trang Trại Giang Sơn 01;02",
                Image: "/images/workdone/giangson1.png"
            },
            {
                Name: "Hệ thống NLMT của Công ty CP Đầu tư và Phát triển Năng Lượng Cao Nguyên",
                Image: "/images/workdone/nangluongcaonguyen.png"
            }
        ]
    },
    {
        Name: "Home Appliances",
        Caption: "Say no to manual home labour!",
        contentPosition: "middle",
        Items: [
            {
                Name: "hệ thống NLMT áp mái Trang Trại của các Công ty TNHH Phúc Gia Ban Mê ",
                Image: "/images/workdone/phucgiabanme.jpg"
            },
            {
                Name: "hệ thống NLMT Công ty TNHH Gia Thành",
                Image: "/images/workdone/giathanh.png"
            },
            {
                Name: "Hệ thống giám sát tại Công ty Điện lực Đăk Lăk",
                Image: "/images/workdone/hethonggiamsat.png"
            }
        ]
    },
    {
        Name: "Home Appliances",
        Caption: "Say no to manual home labour!",
        contentPosition: "middle",
        Items: [
            {
                Name: "hệ thống NLMT áp mái Trang Trại của các Công ty TNHH Phúc Gia Ban Mê ",
                Image: "/images/workdone/phucgiabanme.jpg"
            },
            {
                Name: "hệ thống NLMT Công ty TNHH Gia Thành",
                Image: "/images/workdone/giathanh.png"
            },
            {
                Name: "Hệ thống giám sát tại Công ty Điện lực Đăk Lăk",
                Image: "/images/workdone/hethonggiamsat.png"
            }
        ]
    },
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
                    items.map((item, index) => {
                        return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                    })
                }
            </Carousel>
            <br />
        </div>
    );
}

const Banner = (props) => {
    const [open,setOpen] = useModal(false);
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems;
    let items = [];

    // const content = (
    //     <Grid item xs={4} key="content">
    //         <CardContent className="Content">
    //             <Typography className="Title">
    //                 {props.item.Name}
    //             </Typography>
    //             <Typography className="Caption">
    //                 {props.item.Caption}
    //             </Typography>
    //             <Button variant="outlined" className="ViewButton">
    //                 View Now
    //             </Button>
    //         </CardContent>
    //         {/* <CardComponent tittle={props.item.Name}></CardComponent> */}
    //     </Grid>
    // )

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];
        const media = (
            <Grid item xs={4} key={item.Name}>
                <CardMedia
                    className="Media"
                    sx={{ height: '300px' }}
                    image={item.Image}
                    title={item.Name}
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
                <BasicModal open={open} togle={setOpen} image={item.Image} title={item.Name}/>

            </Grid>
            
        )

        items.push(media);
    }

    // if (contentPosition === "left") {
    //     items.unshift(content);
    // } else if (contentPosition === "right") {
    //     items.push(content);
    // } else if (contentPosition === "middle") {
    //     items.splice(items.length / 2, 0, content);
    // }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
            {/* <BasicModal open={open} togle={setOpen} image={item.Image} title={item.Name}/> */}
        </Card>
    )
}


export default ActionAreaCard