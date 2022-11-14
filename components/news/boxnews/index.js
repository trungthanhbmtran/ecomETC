import { CardHeader, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Link from '../../../lib/Link'

const BoxNews = ({ time, title, subid, imagePath, Description, group,i }) => {
    // if (subid) {
    //     return (
    //         <Link href={`./post/${group}/${subid}`} variant="body2" underline="none">
    //             <CardActionArea >
    //                 <CardMedia
    //                     component="img"
    //                     height="140"
    //                     image={imagePath}
    //                     alt="green iguana"
    //                 />
    //                 <CardHeader
    //                     subheader={time}
    //                 />
    //                 <CardContent>
    //                     <Typography gutterBottom variant="h5" component="div">
    //                         {title}
    //                     </Typography>
    //                     <Typography variant="body2" color="text.secondary">
    //                         {Description}
    //                     </Typography>
    //                 </CardContent>
    //             </CardActionArea>
    //         </Link>
    //     )
    // }
    return (
            <Link href={`http://localhost:3000/post/${group}/${i+1}`} variant="body2" underline="none">
                <CardActionArea >
                    {imagePath ? (
                        <CardMedia
                            component="img"
                            height={title ? '200' : '700'}
                            image={imagePath}
                            alt="green iguana"
                        />
                    ) : null
                    }

                    {
                        time ? (
                            <CardHeader
                                subheader={time}
                            />
                        ) : null
                    }

                    {
                        title ? (
                            <CardContent>
                                <Typography align='center' gutterBottom variant="h6" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {Description}
                                </Typography>
                            </CardContent>
                        ) : null
                    }
                </CardActionArea>
            </Link>
    )

}

export default BoxNews