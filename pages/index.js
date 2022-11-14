import { Divider, Stack } from '@mui/material';
// import Indexs from '../components/indexs'
import Layout from '../components/Layout'
import { slideData } from '../data/slidedata';
import BoxInfo from '../components/indexs/boxinfo';
import SlideImages from '../components/indexs/SlideImages';

export default function Index() {
 
  return (
    <Layout>
        {/* <Indexs/> */}
          <Stack
                direction='column'
                // divider={<Divider />}
                spacing={10}
                >
                <SlideImages/>
                {slideData.map(e => <BoxInfo key={e.id}  path={e.path} component={e.component} />)}
            </Stack>
    </Layout>
  )
}