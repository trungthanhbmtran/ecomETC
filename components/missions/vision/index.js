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

const Vision = () => {
    return (
        <BoxImageContent src="./XXx/bg-tamnhinsumenh.jpg">
            <TittleContent>TẦM NHÌN VÀ SỨ MỆNH</TittleContent>
            <Container maxWidth="lg">
                <Grid container spacing={5} >
                    <Grid item xs={6}>
                        <BoxContentTags variant="h4" >Sứ Mệnh</BoxContentTags>
                        <BoxContentInsign >
                            ◉ Bảo vệ phát triển rừng gắn với việc bảo tồn và phát triển nguồn gen giống gốc Sâm Ngọc Linh.
                            <br></br>
                            ◉ Tạo ra những sản phẩm tốt nhất, đa dạng các sản phẩm để đáp ứng nhu cầu của tất cả các khách hàng trong việc bảo vệ và chăm sóc sức khỏe từ Sâm Ngọc Linh.
                        </BoxContentInsign>
                    </Grid>
                    <Grid item xs={6}>
                        <BoxContentTags variant="h4" >Tầm Nhìn</BoxContentTags>
                        <BoxContentInsign >
                            ◉ Trở thành thương hiệu hàng đầu tại Việt Nam trong lĩnh vực thực phẩm bảo vệ sức khỏe và các chế phẩm Sâm Ngọc Linh.
                            <br></br>
                            ◉ Đưa Sâm Ngọc Linh vươn tầm Châu Á và hướng ra thế giới khẳng định loài sâm tốt nhất thế giới.
                        </BoxContentInsign>
                    </Grid>
                    <Grid item xs={12}>
                        <BoxContentTags variant="h4" >Giá trị cốt lõi</BoxContentTags>
                        <BoxContentInsign >
                            ◉ Nền tảng đầu tiên cho sự thành công đó chính là CON NGƯỜI. Chúng tôi luôn tôn trọng, đề cao mối quan hệ với khách hàng, đối tác, và các cán bộ công nhân viên.
                            <br></br>
                            ◉ Chúng tôi luôn luôn làm ĐÚNG, làm ĐỦ và cao hơn những cam kết với khách hàng với đối tác, nhà đầu tư và cán bộ công nhân viên.
                            <br></br>
                            ◉ Chúng tôi luôn luôn đặt chữ TÂM trong tất cả mọi việc. Từ suy nghĩ cho tới hành động đều đem hết khả năng để hoàn thành một cách hoàn hảo nhất.
                            <br></br>
                            ◉ Chúng tôi luôn trao dồi KIẾN THỨC, không ngừng học hỏi, tiếp thu và có ý chí vươn lên vượt qua mọi khó khăn cùng đi tới thành công.
                            <br></br>
                            ◉ Chúng tôi luôn TRUNG THỰC với khách hàng với đối tác, nhà đầu tư, với cán bộ công nhân viên, luôn tuân thủ đầy đủ các quy định của pháp luật.
                        </BoxContentInsign>
                    </Grid>
                </Grid>
            </Container>

               </BoxImageContent>
    )
}

export default Vision