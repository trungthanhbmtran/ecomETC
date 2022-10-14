import { Grid, Typography, Box, Container, styled } from "@mui/material"
import Image from "next/image"
import TittleContent from "../../ContainerComponents/tittlecontent";
import { BoxImageContent } from "../../styles/banner";


export const BoxContentTags = styled(Typography)(() => ({
     position : 'relative', 
     top : 60 ,
     textAlign : 'center',
     background : 'url(./XXx/bg-gia-tri-cot-loi.png)',
     backgroundRepeat :'no-repeat',
     backgroundPositionX : 'center',
     backgroundPositionY:'center'
}));


export const BoxContentInsign = styled(Box)(() => ({
    marginTop : 40,
    paddingTop : 40,
    paddingLeft : 20,
    transition: 'opacity 1s', 
    opacity: 1,
    minHeight : 200 ,
    border : 'solid' , 
    borderRadius : '20px 20px 20px 20px'
}));

const BussinessPhilosophy = () =>{
    return(
        <BoxImageContent src="./XXx/bg-value.jpg">
            <TittleContent>TRIẾT LÝ KINH DOANH</TittleContent>
            <Container maxWidth="lg">
            <Grid container spacing={4} sx={{marginTop : 2}}>
            <Grid item xs={12} sx={{marginLeft : 50}}>
                <Typography>
                Là những người hoạt động trong lĩnh vực nghiên cứu khoa học sức khỏe và dược khoa, chúng tôi thấu hiểu sự quý hiếm và những lợi ích to lớn từ cây Sâm Ngọc Linh (Panaxvietnamensis hoặc Panaxginseng C.A.Meyer) đối với sức khỏe. Quan trọng hơn, chúng tôi muốn đóng góp một phần sức lực nhỏ bé của mình trong việc phát triển ngành Sâm Việt Nam trên bản đồ thế giới. Đó là lý do, trong hơn 20 năm qua, Công ty cổ phần Sâm Ngọc Linh Kon Tum đã nghiên cứu và bảo tồn nguồn Gen quý hiếm của cây Sâm Ngọc Linh. Nỗ lực của chúng tôi đã được chính quyền tỉnh KonTum và chính phủ ghi nhận. Điều này được thể hiện thông qua việc chính quyền địa phương giao cho Vingin phát triển trồng Sâm dưới tán rừng, tại vùng núi Ngọc Linh (KonTum). Một điều vinh dự, Thủ tướng chính phủ đã đến thăm vùng trồng Sâm của công ty và đánh giá cao những hoạt động của Vingin trong việc phát triển ngành Sâm, gắn với bảo vệ rừng. Chúng tôi cho rằng, đó là một vinh dự, nhưng đồng thời cũng là trách nhiệm.
                </Typography>
            </Grid>
            <Grid item xs={12}  sx={{marginLeft : 50}}>
                <Typography>
                Là những người hoạt động trong lĩnh vực nghiên cứu khoa học sức khỏe và dược khoa, chúng tôi thấu hiểu sự quý hiếm và những lợi ích to lớn từ cây Sâm Ngọc Linh (Panaxvietnamensis hoặc Panaxginseng C.A.Meyer) đối với sức khỏe. Quan trọng hơn, chúng tôi muốn đóng góp một phần sức lực nhỏ bé của mình trong việc phát triển ngành Sâm Việt Nam trên bản đồ thế giới. Đó là lý do, trong hơn 20 năm qua, Công ty cổ phần Sâm Ngọc Linh Kon Tum đã nghiên cứu và bảo tồn nguồn Gen quý hiếm của cây Sâm Ngọc Linh. Nỗ lực của chúng tôi đã được chính quyền tỉnh KonTum và chính phủ ghi nhận. Điều này được thể hiện thông qua việc chính quyền địa phương giao cho Vingin phát triển trồng Sâm dưới tán rừng, tại vùng núi Ngọc Linh (KonTum). Một điều vinh dự, Thủ tướng chính phủ đã đến thăm vùng trồng Sâm của công ty và đánh giá cao những hoạt động của Vingin trong việc phát triển ngành Sâm, gắn với bảo vệ rừng. Chúng tôi cho rằng, đó là một vinh dự, nhưng đồng thời cũng là trách nhiệm.
                </Typography>
            </Grid>
            <Grid item xs={12}  sx={{marginLeft : 50}}>
                <Typography>
                Là những người hoạt động trong lĩnh vực nghiên cứu khoa học sức khỏe và dược khoa, chúng tôi thấu hiểu sự quý hiếm và những lợi ích to lớn từ cây Sâm Ngọc Linh (Panaxvietnamensis hoặc Panaxginseng C.A.Meyer) đối với sức khỏe. Quan trọng hơn, chúng tôi muốn đóng góp một phần sức lực nhỏ bé của mình trong việc phát triển ngành Sâm Việt Nam trên bản đồ thế giới. Đó là lý do, trong hơn 20 năm qua, Công ty cổ phần Sâm Ngọc Linh Kon Tum đã nghiên cứu và bảo tồn nguồn Gen quý hiếm của cây Sâm Ngọc Linh. Nỗ lực của chúng tôi đã được chính quyền tỉnh KonTum và chính phủ ghi nhận. Điều này được thể hiện thông qua việc chính quyền địa phương giao cho Vingin phát triển trồng Sâm dưới tán rừng, tại vùng núi Ngọc Linh (KonTum). Một điều vinh dự, Thủ tướng chính phủ đã đến thăm vùng trồng Sâm của công ty và đánh giá cao những hoạt động của Vingin trong việc phát triển ngành Sâm, gắn với bảo vệ rừng. Chúng tôi cho rằng, đó là một vinh dự, nhưng đồng thời cũng là trách nhiệm.
                </Typography>
            </Grid>
        </Grid>
            </Container>
      
    </BoxImageContent>
    )
}

export default BussinessPhilosophy