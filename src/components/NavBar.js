import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  
  return <nav>{
    links.map((data)=>{return(<a href={"#"+data} key={data}>{data}</a>)})
    }</nav>;
}

export default NavBar;
