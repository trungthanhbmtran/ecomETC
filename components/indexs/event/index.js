import { Grid, Tab, Tabs, Typography } from "@mui/material"
import { Box, Container } from "@mui/system";
import { useMemo, useState } from "react";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { NewsData } from '../../../data/newsdata';
import New from "../../news";
import BoxNews from "../../news/boxnews";




function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const Event = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 
  const filterComponent = useMemo(() => NewsData.filter(e => e.id === value),[value]) 

  // console.log('value', value)

  // console.log('filterComponent', filterComponent)

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={(handleChange)} centered>
        {NewsData.map((e, i) => {
          // console.log('e',e)
          return (
            <Tab label={e.title}  {...a11yProps(i)} />
          )
        })}
      </Tabs>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {
            filterComponent[0]?.subcontent.slice(0,3).map((el,i) =>
              <Grid item xs={4}>
                <BoxNews i={i} title={el.title} group={filterComponent[0].group} imagePath={el.imagePath} Description={el.Description} />
              </Grid>
            )
          }
        </Grid>
      </Container>

    </Box>
  )
}

export default Event