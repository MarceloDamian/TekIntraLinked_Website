
import { IoLogoReact } from "react-icons/io5";
import './Demo.css';


const DemoData = [
{   
    headerText:"TEKINTRALINKED",
    icon: (<video className='Demo__item__img' autoPlay loop muted playsInline>
        <source src="videos/DemoVideo.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
    ),
    // probably change this to video. 
    label:'This is the Label',
    path:'../Portfolio/FirstDemo',
    footerText:"",
},
{    
    headerText:"ParkerUp",
    icon:<IoLogoReact size={130} color='turquoise'/>,
    label:'This is the Label for ParkerUp',
    path:'../Portfolio/SecondDemo',
    footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
},
{
    headerText:"AI/ML IMAGE CLASSIFIER",
    icon: <IoLogoReact size={175} color='turquoise'/>,
    label:'This is the Label for IMAGE CLASSIFIER',
    path:'../Portfolio/ThirdDemo',
    footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
},
  
// Below is other items that are not part of the main items
{
    headerText:"Other Items",   
    icon:<IoLogoReact size={175} color='black'/>,
    // label='RetroWebsite'
    label:'This is the Label for other',
    path:'../Portfolio/FourthDemo',
    footerText:"Text this way ----------->",
},
{
    headerText:"",   
    icon:<IoLogoReact size={175} color='blue'/>,
    // label='RetroWebsite'
    label:'This is the Label for other',
    path:'../Portfolio/FifthDemo',
    footerText:"<--------- Text that way ",
},
{
    headerText:"",   
    icon:<IoLogoReact size={175} color='blue'/>,
    // label='RetroWebsite'
    label:'This is the Label for other',
    path:'../Portfolio/ThirdDemo',
    footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
},
{
    headerText:"",   
    icon:<IoLogoReact size={175} color='blue'/>,
    // label='RetroWebsite'
    label:'This is the Label for other',
    path:'../Portfolio/ThirdDemo',
    footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
},
{
    headerText:"",   
    icon:<IoLogoReact size={175} color='blue'/>,
    // label='RetroWebsite'
    label:'This is the Label for other',
    path:'../Portfolio/ThirdDemo',
    footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
},
{
    headerText:"",   
    icon:<IoLogoReact size={175} color='blue'/>,
    // label='RetroWebsite'
    label:'This is the Label for other',
    path:'../Portfolio/ThirdDemo',
    footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
},
{
    headerText:"",   
    icon:<IoLogoReact size={175} color='blue'/>,
    // label='RetroWebsite'
    label:'This is the Label for other',
    path:'../Portfolio/ThirdDemo',
    footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
},
{
    headerText:"",   
    icon:<IoLogoReact size={175} color='red'/>,
    // label='RetroWebsite'
    label:'This is the Label for other',
    path:'../Portfolio/ThirdDemo',
    footerText:"--------------------- Under Construction 👷‍♂️ 🧱 🚧 🚧 ----------------------------",
},


];

export default DemoData;
