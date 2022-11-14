import { Grid, Typography, Box, Container, Paper } from "@mui/material"
import Image from "next/image"
const TradeMark = () => {
    return (
        <Box sx={{ minHeight: 500 }}>
            <Typography align="center">
                    LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN                <br></br>
                <Image src="/XXx/line-1.png" width={129} height={20} layout="fixed" />
            </Typography>
            <Container maxWidth="lg">
                <Grid container spacing={5} >
                    <Grid item xs={6}>
                        <Paper sx={{ textAlign: 'center', pt: 0.5 , transition : 'opacity 1s' ,  opacity: 1 }}>
                            <Image src="/XXx/thuong-hieu-sam-ngoc-linh-kon-tum.jpg" width="550" height="320" layout="fixed" />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    26/11/2020
                    <br></br>
                    Công ty TNHH MTV Thí Nghiệm Điện Việt Nam được hình thành, đây là tiền thân của Công ty Cổ Phần Thí Nghiệm Cơ Điện Việt Nam
                    <br></br>
                    28/02/2022
                    <br></br>
                    Công ty Cổ Phần Thí Nghiệm Cơ Điện Việt Nam hoàn tất việc cổ phần hóa với tên gọi Công ty Cổ Phần Thí Nghiệm Cơ Điện Việt Nam (VN.ETC)
                    <br></br>
                    20/06/2022
                    <br></br>
                    Công ty Cổ Phần Thí Nghiệm Cơ Điện Việt Nam mở văn phòng đại diện tại Quảng Ngãi với tên gọi là Văn phòng Đại diện Công ty Cổ Phần Thí Nghiệm Cơ Điện Việt Nam tại Quảng Ngãi (ETC-QNg)
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default TradeMark