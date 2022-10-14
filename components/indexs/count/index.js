import { Divider, Grid, Stack, Typography,Box } from "@mui/material"
import { Container } from "@mui/system"
import styles from './count.module.css'

const Count = () => {

    return (
        <Box className={styles.root}>
            <Container maxWidth="lg" >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6">
                            NHỮNG CON SỐ ẤN TƯỢNG
                        </Typography>
                        <Typography variant="body1">
                            Là đơn vị tiên phong trong việc bảo vệ nguồn Gen gốc Sâm Ngọc Linh, Sở hữu vườn sâm lớn nhất thế giới hơn 600 ha và quy mô mở rộng 6000 ha trong tương lai,
                        </Typography>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                        >
                            <Typography>
                                TRAO TẶNG HƠN
                                <br></br>
                                500,000
                                Cây Giống
                                <br></br>
                                Cho người dân tại
                                Tumơrông và Đăk Glei
                            </Typography>
                            <Typography>
                                TẠO VIỆC LÀM
                                <br></br>
                                500 +
                                Hộ Gia Đình
                                <br></br>
                                Ký hợp đồng Liên kết trồng Sâm Ngọc Linh
                            </Typography>
                            <Typography>
                                ĐỘI NGŨ

                                <br></br>
                                1,300
                                Nhân Viên
                                <br></br>
                                Công nhân, Kỹ thuật, kinh doanh….
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/e3L6794Ag38" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Grid>
                </Grid>

            </Container>
        </Box>



    )
}

export default Count