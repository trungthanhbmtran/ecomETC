import { Grid, Typography, Box, Container, Paper } from "@mui/material"
import Image from "next/image"
const TradeMark = () => {
    return (
        <Box sx={{ minHeight: 500 }}>
            <Typography align="center">
                THƯƠNG HIỆU SÂM NGỌC LINH KON TUM K5
                <br></br>
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
                            *Hơn 20 năm trồng và phát triển bảo tồn nguồn gen gốc.
                            <br></br>
                            * Sở hữu hơn 7000 ngàn ha vùng trồng sâm tại đỉnh núi Ngọc Linh (nơi cây sâm đầu tiên được tìm thấy).
                            <br></br>

                            * Hơn 600 ha vườn sâm đã trồng .
                            <br></br>

                            * là 1 trong 2 đơn vị duy nhất tới thời điểm này được UBND tỉnh Kon Tum chứng nhận vườn sâm gốc.
                            <br></br>

                            * Tạo công ăn việc làm cho hàng ngàn hộ dân đồng bào Xơ Đăng.
                            <br></br>

                            *Cung cấp miễn phí hàng chục ngàn cây giống mỗi năm cho người dân phát triển.
                            <br></br>

                            *Giúp thay đổi nhận thức của người dân trong việc quản lý bảo vệ rừng kết hợp trồng cây dược liệu.
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default TradeMark