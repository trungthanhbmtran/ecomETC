import { Grid, Typography,Box } from "@mui/material"
import Image from "next/image"
const LeaderShipMessage = () =>{
    return(
            <Box sx={{ backgroundImage: "url(./XXx/gioi-thieu-top-01.jpg)", minHeight: 700 }}>
            <Typography align="center">
                THÔNG ĐIỆP CỦA LÃNH ĐẠO.
                <br></br>
                <Image src="/XXx/line-1.png" width={129} height={20} layout="fixed" />
            </Typography>
            <Grid container spacing={2} sx={{pl : 90}} >
                <Grid item xs={12}>
                    <Typography>Kính gởi Quý đối tác và khách hàng thân mến !</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Lời đầu tiên, thay mặt cho HĐQT Sâm Ngọc Linh Kon Tum K5, cho phép tôi bày tỏ lời cảm ơn đến Quý vị đã luôn tin tưởng, đồng hành và gắn bó cùng thương hiệu Sâm Ngọc Linh Kon Tum K5.</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography> Thưa Quý vị !</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>  Thương hiệu Sâm Ngọc Linh Kon Tum K5 là 1 trong những đơn vị đầu tiên, tiên phong trong việc bảo vệ và nhân giống nguồn Gen gốc, trải qua hơn 20 năm phát triển, từ những cây Sâm Ngọc Linh đầu tiên được tìm thấy, hiện nay chúng tôi đã có hơn 600ha Sâm Ngọc Linh trồng hoàn toàn tự nhiên dưới những tán rừng nguyên sinh nằm trên đỉnh Ngọc Linh có độ cao hơn 2000m so với mực nước biển.</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Chúng tôi theo đuổi tới mục tiêu:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>“kinh doanh không chỉ tạo ra lợi nhuận, thay vào đó, kinh doanh phải gắn với trách nhiệm xã hội và phát triển bền vững”. Và kết quả của việc nỗ lực của chúng tôi được tỉnh Kon Tum và Chính phủ ghi nhận bằng một vinh dự lớn. Năm 2018, Chủ tịch nước Nguyễn Xuân Phúc (Nguyên Thủ Tướng) đã đến thăm vùng trồng Sâm Ngọc Linh Kontum K5 của công ty và đánh giá cao những hoạt động trong việc phát triển, bảo tồn ngành Sâm, gắn với bảo vệ rừng, phong tặng danh hiệu :
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>“QUỐC BẢO VIỆT NAM – BÁU VẬT ĐẠI NGÀN”.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>5 năm qua chúng tôi bắt đầu khai thác và đưa Sâm Ngọc Linh ra thị trường, với những củ sâm trên 10 năm tuổi kết hợp quy trình sản xuất hiện đại, giữ nguyên được các hoạt chất trong sâm, với mục tiêu đa dạng hóa các sản phẩm để phù hợp với nhiều độ tuổi sử dụng, Sâm Ngọc Linh Kon Tum K5 đã khẳng định vị thế trên thị trường và là những đơn vị đầu tiên trong việc phát triển các sản phẩm từ Sâm Ngọc Linh.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Chúng tôi hướng tới mục tiêu tất cả những người dân Việt Nam đều có thể sử dụng được các sản phẩm của Sâm Ngọc Linh. Với sự tin yêu của Quý vị, đội ngũ CBNV của chúng tôi không ngừng sáng tạo và đưa ra các sản phẩm mới, chúng tôi cam kết và đảm bảo quý khách hàng sẽ luôn hài lòng khi sử dụng những sản phẩm mang thương hệu Sâm Ngọc Linh Kon Tum K5.
                    </Typography>
                </Grid>
            </Grid>
            </Box>
    )
}

export default LeaderShipMessage