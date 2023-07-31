import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavBar from "./Nav";
import { StartLeft } from "../GradientShapes/StartLeft";
import CallToAction from "./CallToAction";
import { StartRight } from "../GradientShapes/StartRight";
import './landingpg.css'

const navigation = [
  { name: "Cato", href: "#" },
  { name: "Peri", href: "#" },
  { name: "About", href: "#" },
];

export default function Landing({classNames}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-transparent">
      <NavBar/>

      <div className={classNames("contentContainer", "lg:px-8")}>
        <StartLeft/>
        <CallToAction/>
        <StartRight/>
      </div>
    </div>
  );
}
