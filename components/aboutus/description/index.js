import { Grid, Tab, Tabs, Box,Container, Paper } from "@mui/material"
import { useState,useMemo } from "react";
import { DescriptionData } from "../../../data/descriptiondata";
import BoxNews from "../../news/boxnews"

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Description = () =>{
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 
  const filterComponent = useMemo(() => DescriptionData.filter(e => e.id === value),[value]) 

    return(
        <Box sx={{ bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={(handleChange)} centered>
          {DescriptionData.map((e, i) => {
            // console.log('e',e)
            return (
              <Tab label={e.title}  {...a11yProps(i)} />
            )
          })}
        </Tabs>
  
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {
              filterComponent[0]?.subcontent.slice(0,3).map(el =>
                <Grid item xs={4}>
                  <Paper sx={{minHeight : 400, mt : 5}}>
                    <BoxNews title={el.title} group={filterComponent[0].group} imagePath={el.imagePath} Description={el.Description} />
                  </Paper>
                </Grid>
              )
            }
          </Grid>
        </Container>
  
      </Box>
    )
}

export default Description