import React from "react";

let counter = 0
function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}</nav>;
  return <nav>{links.map((link)=><a key={counter++}href={"#"+link}>{link}</a>)}</nav>;
}

export default NavBar;
