import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "../../../lib/Link";

export default function Header() {
    return (
        <Grid container sx={{ backgroundColor: "green" }} >
            <Grid item xs={1}>
                <Link href="/" underline="none" sx={{ display: { sm: 'block' } }}>
                    <Image src="/logo.png" width={160} height={80} alt="logo"  />
                    {/* <Image src="/logo.png" width={80} height={80}></Image> */}
                </Link>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                    Công ty cổ phần thí nghiệm điện Việt Nam
                    VN ETC
                </Typography>
            </Grid>
            <Grid item xs={7}>
                <Typography backgroundColor="yellow">1</Typography>
                <Typography backgroundColor="green">2</Typography>
                <Typography backgroundColor="red">3</Typography>
            </Grid>
        </Grid>
        )
}
