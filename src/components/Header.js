import { Link } from "react-router-dom";


export default function Header (props) {
return <div id="navigation"><h1>Media store</h1>
<div>
    <Link to="/" id="homelink"> <h4>Home</h4></Link> |
</div>
<div>
    <Link to="/About" id="aboutlink"><h4>About </h4></Link> |
</div>
<div>
    <Link to="/Basket" id="basketlink"><h4>Basket</h4></Link> 
</div>
</div>
}