import Layout from "../Layout"
import { Box, Paper,Grid, Divider, Typography } from "@mui/material"
import { Container } from "@mui/system"
import BoxNews from "../news/boxnews"

const LayoutPage = ({children})=>{

return(
    <Layout>
      <Container maxWidth="lg" >
         <Grid container spacing={2} sx={{ marginTop : 3}}>
            <Grid item xs>
                {children}
            </Grid>
            <Grid item xs={4}>
                <Paper>
                    <Typography variant="h6" align="center"> Tin tức mới nhất</Typography>
                    <BoxNews title={"111111"} Description="thanh kute dang lam"/>
                    <Divider textAlign="center" variant="middle"/>
                    <Typography variant="h6" align="center"> Sản Phẩm mới nhất</Typography>
                    <Divider textAlign="center" variant="middle"/>
                </Paper>
            </Grid>
         </Grid>
      </Container>
    </Layout>
)
}

export default LayoutPage