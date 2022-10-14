import { Button, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Image from "next/image"

const SuggestForYou= () =>{
    
    return(
        <Container maxWidth="lg">
        <Typography align="center">
                 CÁC SẢN PHẨM TỐT CHO SỨC KHỎE CỦA BẠN
            <br></br>
            <Image src="/XXx/line-1.png" width={129} height={20} layout="fixed" />
        </Typography>
        <Grid container direction='row' spacing={2} sx={{textAlign:'center'}}>
            <Grid item xs={4} md={4}>
              1
            </Grid>
            <Grid item xs={4} md={4}>
              2
            </Grid>
            <Grid item xs={4} md={4}>
              3
            </Grid>
            <Grid item xs={4} md={4}>
              1
            </Grid>
            <Grid item xs={4} md={4}>
              2
            </Grid>
            <Grid item xs={4} md={4}>
              3
            </Grid>
            <Grid item xs={4} md={4}>
              1
            </Grid>
            <Grid item xs={4} md={4}>
              2
            </Grid>
            <Grid item xs={4} md={4}>
              3
            </Grid>
            <Grid item xs={4} md={4}>
              1
            </Grid>
            <Grid item xs={4} md={4}>
              2
            </Grid>
            <Grid item xs={4} md={4}>
              3
            </Grid>

            <Grid item xs={12} md={12} >
                <Button  variant="contained"> Xem thêm sản phẩm</Button>
            </Grid>

            
        </Grid>

    </Container>

    )
}

export default SuggestForYou