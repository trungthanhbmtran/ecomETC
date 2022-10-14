// import { Box, Grid, Paper } from '@mui/material'
// import { Container } from '@mui/system'
// import { useMemo } from 'react'
// import Layout from '../components/Layout'
// import LayoutPage from '../components/layoutpage'
// import Banner from '../components/layoutpage/banner'
// import TabsComponent from '../components/layoutpage/tabscomponent'
// import BoxNews from '../components/news/boxnews'
// import { useRouter } from 'next/router'


// // const ArrayTabs = [
// //     {id:0, label: 'Tin Tức ETC',component : <ContentPage/>},
// //     {id:1, label: 'Tin Điện',component : <New/>},
// //     {id:2, label: 'Tin tuyển dụng',component : <New/>}
// // ]

// import {NewsData} from '../data/newsdata'

// const News = () => {
//   const router = useRouter()
//   const { slug } = router.query
//   const value = 1
//   const filterDataNews = useMemo(() => NewsData.filter(e=> e.id === value ),[value])
//   console.log('filterDataNews',slug)
//   return (
//       //  <Layout>
//       //     <Banner path="/images/news/etc/congnhandienlucthanhhoacuunguoi.jpg" title="Công nhân Điện lực cứu người bị tai nạn giao thông" description="Theo đó, vào khoảng 7h30 phút ngày 21-7, các anh Trần Văn Đài, Lê Hưng Giang và Tào Văn Hạnh là công nhân Điện lực Như Thanh đang trên đường thực hiện nhiệm vụ, khi đi qua Khu phố 1, thị trấn Bến Sung (Như Thanh) thì gặp một phụ nữ đi xe máy không may bị ngã. Sau cú ngã, nạn nhân bị xe máy đè lên, mặt bị xây xát và chảy nhiều máu."/>
//       //     <TabsComponent ArrayTabs={NewsData}/>
//       //  </Layout>
//         <LayoutPage>
//         <Grid container spacing={2}>
//           {
//             filterDataNews.at(0).subcontent?.map((e,i)=>
//             (
//                   <Grid item md={6}>
//                     <BoxNews Description={e.Description} group={filterDataNews.at(0).group} time={e.time} title={e.title} imagePath={e.imagePath}/>
//                   </Grid>
//             ) 
         
//             )
//           }
//           </Grid>
//        </LayoutPage>
//         // <Maybienthe/>
//         // <Link  href="/post/abc/232132">
//         //     <a>First comment</a>
//         //   </Link>
//   )
// }

// export default News