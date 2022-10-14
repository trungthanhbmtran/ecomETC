
import {  Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
} from "../../styles/banner";

const Banner = ({path,title,description}) =>{
 return(
    <BannerContainer >
       {/* <video autoPlay muted loop playsInline>
                        <source src="/XXx/video.mp4"></source>
              </video> */}
    <BannerImage src={path} />
    {/* <BannerContent>
      <Typography variant="h6">{title} </Typography>
      <BannerDescription variant="subtitle">
         {description}
      </BannerDescription>

      //<BannerShopButton color="primary">Xem thêm</BannerShopButton> 
    </BannerContent> */}
  </BannerContainer>
);
}

export default Banner
