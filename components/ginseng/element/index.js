import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import Image from "next/image"
import { BoxImageContent } from "../../styles/banner"

const Element = () =>{
    return(
        <BoxImageContent>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={6} md={6} sx={{marginTop: 15}}>
                         <Image src={"/XXx/bieu-do-ham-luong-saponin-02.png"} width={555} height={387} layout="fixed"/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Image src={"/XXx/cay-sam-ngoc-linh-022.png"} width={555} height={619} layout="fixed"/>
                     </Grid>
                </Grid>
            </Container>
        </BoxImageContent>
       
    )
}

export default Element