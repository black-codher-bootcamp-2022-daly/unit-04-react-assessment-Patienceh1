import { Link } from "react-router-dom";


export default function Header (props) {
return <div id="navigation"><h1 className="title">/Media </h1>
<div>
    <Link  className="Link" to="/" id="homelink"> <h4>HOME</h4></Link>
</div>
<div>
    <Link className="Link" to="/about" id="aboutlink"><h4>ABOUT </h4></Link> 
</div>
<div>
    <Link className="Link" to="/basket" id="basketlink"><h4>BASKET:{props.itemCount}</h4></Link> 
</div>
</div>
}