import {  Container,Grid, Typography , Paper, Button} from "@mui/material"
import Image from "next/image"
import CardComponent from "../../ContainerComponents/card"

const Intro = () =>{
    return(
        <Container maxWidth="lg" >
        <Grid container direction='row' spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={24}>
                                <iframe width="100%" height="335" src="https://www.youtube.com/embed/hiPo9MFGfg0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6} textAlign="center">
                            <Paper elevation={24}>
                                <CardComponent pathImg='/XXx/cau-chuyen-cua-chung-toi.jpg' />
                            </Paper>
                        </Grid>
                    </Grid>
        </Container>
    )
}

export default Intro