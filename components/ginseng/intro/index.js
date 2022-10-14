import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Image from "next/image"
import { BoxImageContent } from "../../styles/banner"

const Intro = () => {
    return (
        <BoxImageContent src="./XXx/bg-samngoclinh-05.jpg">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src="/XXx/cay-sam.png" width={360} height={662.5} layout="fixed" />
                    </Grid>
                    <Grid item container xs spacing={2}>
                        <Grid item xs={12}>
                            <Typography>
                                Ở độ cao 2598m trên đỉnh núi Ngọc Linh huyền bí ,ẩn dưới những tán rừng già cổ thụ, một báu vật vô cùng quý hiếm đó chính là cây Sâm Ngọc Linh.Sâm Ngọc Linh khởi nguồn là một cây thuốc “giấu” loài cây đã được người dân tộc Xơ Đăng sống dưới chân núi Ngọc Linh sử dụng để chữa bệnh và tăng cường sức khỏe từ xa xưa , cho đến khi được các nhà nghiên cứu phát hiện.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Năm 1973 đoàn điều tra dược liệu do Dược sỹ Đào Kim Long và Nguyễn Châu Giang hướng dẫn đã phát hiện được một loài PANAX mọc thành quần thể ở độ cao 1800m tại xã Ngoc Lei huyện Đắc Tô nay là huyện Tumơrông .
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Năm 1974 Dược sỹ Nguyễn Thới Nhâm đã nghiên cứu công dụng của cây Sâm Ngọc Linh và được công bố trên tạp chí Herba Polonica số 1/1976 Ba Lan và nhanh chóng được đánh giá là loài sâm tốt nhất thế giới.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Năm 1978 Bộ Y Tế đã thành lập Đơn vị nghiên cứu chuyên đề Sâm khu 5, năm 1985 Bộ Y Tế nâng lên thành Trung Tâm Sâm Việt Nam nay đổi thành Trung Tâm Sâm Và Dược Liệu Tp.HCM trực thuộc Viện Dược Liệu.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Năm 1985 Tiến sỹ Hà Thị Dung và GS Grushvizky đã xác định đây là một loài mới của khoa học và là loài đặc hữu của Việt Nam được đặt tên khoa học là Panax Vietnamensis Ha et Grushv .
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Với vị trí đặc biệt núi Ngọc Linh Kon Tum nơi được mệnh danh là nóc nhà Tây Nguyên , nơi mà linh khí của trời và tinh chất của đất gặp nhau hòa quyện tạo nên một vùng khí hậu , thổ nhưỡng vô cùng “KHÁC BIỆT , ĐẶC BIỆT , DUY NHẤT” nuôi dưỡng cây Sâm Ngọc Linh, giúp cây Sâm Ngọc Linh hình thành, phát triển và tích lũy được những hoạt chất , tính chất sinh học tinh túy nhất mà không có một nơi nào , một loài sâm nào trên thế giới có được. Sâm Ngọc Linh cũng đã được các nhà khoa học trong và ngoài nước nghiên cứu và khẳng định là một trong các loài sâm tốt nhất thế giới với 52 hoạt chất saponin chính bao gồm tất cả những hoạt chất saponin tốt nhất có trong sâm Hàn Quốc , sâm Mỹ, Nhật , Trung quốc.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </BoxImageContent>
    )
}

export default Intro