import { Container, Avatar, Rating, Typography, Box, Grid } from "@mui/material"
import Image from "next/image"
import StarIcon from '@mui/icons-material/Star';
import Carousel from 'react-material-ui-carousel'

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};


const FeelBack = () => {
    const value = 3.5;

    return (
        <Container maxWidth="lg">
            <Typography align="center">
                CẢM NHẬN KHÁCH HÀNG
                <br></br>
                <Image src="/XXx/line-1.png" width={129} height={20} layout="fixed" />
            </Typography>
            <Carousel
            autoPlay={true}
            swipe={true}
            indicators={false}
            navButtonsAlwaysInvisible
            cycleNavigation={false}
            fullHeightHover={false}
            animation="fade"
            height={200}
            interval={3000}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ml : 68.3}}>
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56  }}
                />
                </Box>
                <Rating
                    name="text-feedback"
                    value={5}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Typography >Thành/Lập Trình tự do</Typography>
                <Typography>Cảm ơn các bạn đã mang đến một sản phẩm có nhiều lợi ích cho xã hội</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ml : 68.3}}>
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                />
                </Box>
                <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Typography >Thanh 2/Lập Trình tự do</Typography>
                <Typography>Cảm ơn các bạn đã mang đến một sản phẩm có nhiều lợi ích cho xã hội</Typography>
            </Box>
        </Carousel>
           
        </Container>
    )
}

export default FeelBack