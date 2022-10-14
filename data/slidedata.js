import Event from "../components/indexs/event/index";
import Intro from "../components/indexs/intro";

import Newproducts from "../components/indexs/newproducts";
import SuggestForYou from "../components/indexs/suggestforyou";
import Count from "../components/indexs/count";
import FeelBack from "../components/indexs/feelback";

export const slideData = [
    // { id: 0, tittle: 'VỀ CHÚNG TÔI', path: './aboutus', component: <SlideImages/> },
    { id: 1, tittle: 'VỀ CHÚNG TÔI', path: './aboutus', component: <Intro/> },
    // { id: 1, tittle: 'LĨNH VỰC HOẠT ĐỘNG', path: './aboutus', component: <ActionAreaCard/> },
    { id: 2, tittle: 'Tuyên Ngôn Doanh Nghiệp', path: './aboutus', component: <Newproducts/> },
    { id: 3, tittle: 'TIN TỨC NỔI BẬT', path: './news', component: <SuggestForYou/> },
    { id: 4, tittle: 'Thống kê ', path: './aboutus', component: <Count/> },
    { id: 5, tittle: 'Tin tức ', path: './aboutus', component: <Event/> },
    { id: 6, tittle: 'Phản hồi  ', path: './aboutus', component: <FeelBack/> }
  ];