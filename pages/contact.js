import { Divider, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Layout from "../components/Layout"
import HomeIcon from '@mui/icons-material/Home';
import PlaceIcon from '@mui/icons-material/Place';
import Image from "next/image";
// import BasicModal from "../components/modal"

const Contact = () => {
    return (
        <Layout>
            {/* <Typography>Vị trí của chúng tôi ở đây </Typography> */}

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.0547367630377!2d108.06016398891441!3d12.699127842494986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f7c2b87a97cf%3A0xe9ea4bdd35f34d68!2zMjEzIEzDqiBRdcO9IMSQw7RuLCBUw6JuIEFuLCBUaMOgbmggcGjhu5EgQnXDtG4gTWEgVGh14buZdCwgxJDhuq9rIEzhuq9rLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1659972859832!5m2!1svi!2s" width="100%" height="500" ></iframe> */}
            <Container maxWidth="lg" sx={{ mt: 12 }}>
                <Grid container spacing={5}>
                    <Grid container item spacing={2} xs={6} sx={{ mt: 5 }}>
                        <Grid item xs={12}>
                            <Typography><HomeIcon color='primary' /> Trụ sở chính : CÔNG TY CỔ PHẦN THÍ NGHIỆM CƠ ĐIỆN VIỆT NAM</Typography>
                            <Typography><PlaceIcon color='primary' /> Số 22 Trần Hữu Dực – Tổ DP 5 – P. Tân Lợi – Tp Buôn Ma Thuột – tỉnh Đăk Lăk – Việt Nam</Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography> <HomeIcon color='primary' /> Văn phòng đại diện tại Miền Trung</Typography>
                            <Typography><PlaceIcon color='primary' />  Số 08 Phước Hòa 5 – P. Khuê Trung – Q. Cẩm Lệ - TP Đà Nẵng.</Typography>
                            <Divider />
                        </Grid>
                    </Grid>
                    <Grid item container xs spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h6" align="center" >
                                TRỤ SỞ CHÍNH
                                <br></br>
                                <Image src="/XXx/line-1.png" width={129} height={20} layout="fixed" />
                            </Typography>

                        </Grid>
                        <Grid item xs={12}>
                       
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995317.2361529528!2d106.84645402146995!3d12.375966967983215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f75583ce8309%3A0xabb13387ffecfc66!2zQ-G7rWEgSMOgbmcgVGjhu51pIFRyYW5nIFlPRFkgQnXDtG4gTWEgVGh14buZdA!5e0!3m2!1svi!2s!4v1664273674853!5m2!1svi!2s" width="100%" height="500"></iframe>
                        </Grid>
                      
                        {/* <Grid item xs={12}>
                            <Typography variant="h6" align="center" >
                                 GỞI LIÊN HỆ
                                <br></br>
                                <Image src="/XXx/line-1.png" width={129} height={20} layout="fixed" />
                            </Typography>
                        </Grid>
                        <Grid item container xs={12} spacing={2}>
                                <Grid item xs={12}>
                                <TextField
                                   
                                    onChange={handleChange}
                                    variant="filled"
                                />
                                </Grid>
                                <Grid item xs={12}>
                                    1
                                </Grid>
                                <Grid item xs={12}>
                                    1
                                </Grid>
                                <Grid item xs={12}>
                                    1
                                </Grid>
                                <Grid item xs={12}>
                                    1
                                </Grid>
                                <Grid item xs={12}>
                                    1
                                </Grid>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Container>


        </Layout>
    )
}

export default Contact