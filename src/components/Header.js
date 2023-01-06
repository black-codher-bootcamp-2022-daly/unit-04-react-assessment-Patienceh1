import { Link } from "react-router-dom";


export default function Header (props) {
return <div id="navigation"><h1 className="title">Media store</h1>
<div>
    <Link to="/" id="homelink"> <h4>Home</h4></Link>
</div>
<div>
    <Link to="/about" id="aboutlink"><h4>About </h4></Link> 
</div>
<div>
    <Link to="/basket" id="basketlink"><h4>Basket:{props.itemCount}</h4></Link> 
</div>
</div>
}