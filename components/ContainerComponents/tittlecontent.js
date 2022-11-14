import { Typography } from "@mui/material"
import Image from "next/image"
import { Children } from "react"

const TittleContent = ({children}) =>{
    return(
        <Typography variant="h5" align="center" sx={{pt : 3}}>
        {children}
        <br></br>
        <Image src="/XXx/line-1.png" width={129} height={20} layout="fixed" />
        </Typography>
    )
}

export default TittleContent