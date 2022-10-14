import {
  Container,
  Divider,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../../lib/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FooterTitle } from "../../styles/footer";
import Link from "../../../lib/Link";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.primary,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Container maxWidth="lg" >
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Typography>
            CÔNG TY CỔ PHẦN SÂM NGỌC LINH KON TUM
            <br></br>
            245 Lê Hồng Phong, P. Quyết Thắng, Tp Kon Tum.
            <br></br>
            0945.165.165 – 02603.88.99.88
            <br></br>
            * MSDN: 6100223226, cấp ngày: 29/03/2016
            <br></br>
            * Cấp bởi: Sở Kế hoạch và Đầu tư Tỉnh Kon Tum.
          </Typography>
          <Typography>
            Giao Hàng và Thanh Toán
            <br></br>
            Điều khoản dịch vụ
            <br></br>
            Hướng Dẫn Mua Hàng
            <br></br>
            Chính Sách Bảo Mật
            <br></br>
            Chính Sách Đổi Trả
            <br></br>
            Giao Hàng và Thanh Toán
          </Typography>
          <Typography>
            Thực phẩm bảo vệ sức khỏe. Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.
            <br></br>
            Các sản phẩm Rượu đang chờ xác nhận của Bộ Công Thương, chúng tôi không bán rượu cho người dưới 18 tuổi.
            <br></br>
          </Typography>
        </Stack>
      </Container>
    </Box>
    // <Box
    //   sx={{
    //     background: Colors.primary,
    //     color: Colors.white,
    //     p: { xs: 4, md: 10 },
    //     pt: 12,
    //     pb: 12,
    //     fontSize: { xs: '12px', md: '14px' }
    //   }}
    // >
    //   <Grid container spacing={2} justifyContent="center">
    //     <Grid item md={6} lg={4}>
    //       <Typography variant="caption2">
    //       CÔNG TY CỔ PHẦN THÍ NGHIỆM CƠ ĐIỆN VIỆT NAM
    //       <br></br>
    //       Tên viết tắt: VN.ETC 
    //       <br></br>
    //       1.	Trụ sở chính: Số 22 Trần Hữu Dực – Tổ DP 5 – P. Tân Lợi – Tp Buôn Ma Thuột – tỉnh Đăk Lăk – Việt Nam
    //       <br></br>
    //       Tel/Fax: +84-262-3 97.71.71    Hotline: +84-968.17.47.47/+84-905.174.001
    //       <br></br>
    //       2.	Văn phòng đại diện tại Miền Trung: Số 08 Phước Hòa 5 – P. Khuê Trung – Q. Cẩm Lệ - TP Đà Nẵng.
    //       <br></br>
    //       ĐT: 0236.3.79.3979;   Fax: 0236.3.79.3979
    //       <br></br>
    //       Email: vietnam.etc.ltd@gmail.com
    //       </Typography>
    //       <Box
    //         sx={{
    //           mt: 4,
    //           color: Colors.dove_gray,
    //         }}
    //       >
    //         <FacebookIcon sx={{ mr: 1 }} />
    //         <TwitterIcon sx={{ mr: 1 }} />
    //         <InstagramIcon />
    //       </Box>
    //     </Grid>
    //     <Grid item md={6} lg={2}>
    //       <FooterTitle variant="body1">Thông tin</FooterTitle>
    //       <List>
    //         <Link href="/about" color="secondary" underline="none">
    //           <ListItemText>
    //               <Typography lineHeight={2} variant="caption2">
    //                 Giới thiệu
    //               </Typography>
    //           </ListItemText>
    //         </Link>
    //         <ListItemText>
    //           <Typography lineHeight={2} variant="caption2">
    //             Theo dõi đơn hàng
    //           </Typography>
    //         </ListItemText>
    //         <ListItemText>
    //           <Typography lineHeight={2} variant="caption2">
    //             Cam kết &amp; chính sách
    //           </Typography>
    //         </ListItemText>
    //         <ListItemText>
    //           <Typography lineHeight={2} variant="caption2">
    //             Điều kiện &amp; Năng lực
    //           </Typography>
    //         </ListItemText>
    //       </List>
    //     </Grid>
    //     <Grid item md={6} lg={2}>
    //       <FooterTitle variant="body1">my account</FooterTitle>
    //       <List>
    //         <ListItemText>
    //           <Typography lineHeight={2} variant="caption2">
    //             Đăng nhập
    //           </Typography>
    //         </ListItemText>
    //         <ListItemText>
    //           <Typography lineHeight={2} variant="caption2">
    //             Giỏ sản phẩm
    //           </Typography>
    //         </ListItemText>
    //         <ListItemText>
    //           <Typography lineHeight={2} variant="caption2">
    //             Tài khoản của tôi
    //           </Typography>
    //         </ListItemText>
    //         <ListItemText>
    //           <Typography lineHeight={2} variant="caption2">
    //             Yêu thích
    //           </Typography>
    //         </ListItemText>
    //       </List>
    //     </Grid>
    //     <Grid item md={6} lg={4}>
    //       <FooterTitle variant="body1">Thong tin them</FooterTitle>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
}
