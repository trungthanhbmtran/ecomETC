import { useRouter } from 'next/router'
// import Maybienthe from '../../components/newscomponent/ETC/1'
// import Maybienthe2 from '../../components/newscomponent/ETC/2'
import {NewsData} from '../../data/newsdata'
import dynamic from 'next/dynamic'
import LayoutPage from '../../components/layoutpage'
import { Grid } from '@mui/material'
import { useMemo } from 'react'
import BoxNews from '../../components/news/boxnews'

// const DataPost = [
//   {id : 1 , title : 'Văn hoá doanh nghiệp việt nam',component :    <Maybienthe/>},
//   {id : 2 , title : 'Sử dụng thiết bị ra sao',component :    <Maybienthe2/>},
//   {id : 3 , title : 'Triển khai dự án',component :    <Maybienthe2/>},
//   {id : 4 , title : 'Thành đang test',component :    <Maybienthe/>},
// ]


const NewsBox = () => {
  const router = useRouter()
  const { slug } = router.query
  let Value =  slug.at(0)
  // console.log('router.query',slug)
  // console.log('router.query',slug.at(0),slug.at(1))

  // console.log('router.query111', DataPost.find(x => x.title === `${slug.at(0).toString()}`))
  // console.log('render', DataPost.reduce((t, v) => v.title === `${slug.at(0).toString()}` ? [...t, v.component] : t, []))

  // DataPost.find(x => x.title === slug.at(0)).map(e => {e.component}) 

    // console.log('slug',slug)
    const filterDataNews = useMemo(() => NewsData.filter(e=> e.id == Value ),[Value])
    // console.log('filterDataNews',slug)


    return (
      // <DynamicHeader/>
    //   DataPost.reduce((t, v) => v.title = slug.at(0) ? [...t, v.component] : t, [])    // Object.keys(DataPost.find(x => x.title === slug.at(0))).map(
    //   e => {e.component}
    // )
    // <DynamicHeader/>
    <LayoutPage>
        <Grid container spacing={2}>
          {
            filterDataNews.at(0)?.subcontent?.map((e,i)=>
            (
                  <Grid item md={6}>
                    <BoxNews i={i} Description={e.Description} group={filterDataNews.at(0).group} time={e.time} title={e.title} imagePath={e.imagePath}/>
                  </Grid>
            ) 
         
            )
          }
          </Grid>
    </LayoutPage>
    // NewsData.reduce((t, v) => v.title === `${slug.at(0).toString()}` ? [...t, v.component] : t, [])
  )
}

export default NewsBox