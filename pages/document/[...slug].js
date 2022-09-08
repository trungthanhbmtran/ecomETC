import { useRouter } from 'next/router'
// import Maybienthe from '../../components/newscomponent/ETC/1'
// import Maybienthe2 from '../../components/newscomponent/ETC/2'
import Doc from '../doc'


const DocumentETC = () => {
  const router = useRouter()
  const { slug } = router.query

//   console.log('router.query',slug.at())
  // console.log('router.query',slug.at(0),slug.at(1))

  // console.log('router.query111', DataPost.find(x => x.title === `${slug.at(0).toString()}`))
  // console.log('render', DataPost.reduce((t, v) => v.title === `${slug.at(0).toString()}` ? [...t, v.component] : t, []))

  // DataPost.find(x => x.title === slug.at(0)).map(e => {e.component}) 



  return (
    <Doc slug={slug.at()}/>
  )
}

export default DocumentETC