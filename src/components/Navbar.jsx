import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constant";
import Searchbar from "./Searchbar";
import logos from "../Logo Gaming.png"
import golu from"../Pink and Blue Galaxy Gaming YouTube Banner.jpg";
const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between", backgroundImage : 'https://img.freepik.com/free-photo/abstract-blurred-multi-colored-background-generative-ai_169016-30200.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=ais'}}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src = {logos} height={45}></img>
    </Link>
    <img src={golu} alt="logo" height={50} width={900}/>
   <Searchbar/>
  </Stack>
);

export default Navbar;