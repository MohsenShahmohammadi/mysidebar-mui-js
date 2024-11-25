import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const mainMenu=[
  {
    label:"Home",
    icon:<HomeOutlinedIcon/>,
    to:"/",
    notification:0,
  },
  {
    label:"Customers",
    icon:<Diversity3OutlinedIcon/>,
    to:"/customers",
    notification:"+99",
  },
  {
    label:"Products",
    icon:<QrCode2OutlinedIcon/>,
    to:"/products",
    notification:"30",
  },
  {
    label:"Gallery",
    icon:<CollectionsOutlinedIcon/>,
    to:"/imagegallery",
    notification:"+99",
  },
  {
    label:"Blog",
    icon:<FeedOutlinedIcon/>,
    to:"/blog",
    notification:"60",
  },
  {
    label:"ContactUs",
    icon:<LinkOutlinedIcon/>,
    to:"/contactus",
    notification:0,
  },
  {
    label:"AboutUs",
    icon:<InfoOutlinedIcon/>,
    to:"/aboutus",
    notification:0,
  },
];

export const SecondaryMenu=[
{
    label:"Settings",
    icon:<SettingsOutlinedIcon/>
},
{
    label:"Logout",
    icon:<LogoutOutlinedIcon/>
}
];