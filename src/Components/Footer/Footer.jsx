import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt
} from "react-icons/fa";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div className="container">
        <div 
        data-aos = "zoom-in"
        className="grid md:grid-cols-3 pt-5 pb-44">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              eveniet laborum, ea dolorem illo necessitatibus.
            </p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => {
                    return (
                      <li
                        className="cursor-pointer hover:text-primary duration-300 text-gray-200 uppercase"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => {
                    return (
                      <li
                        className="cursor-pointer hover:text-primary duration-300 text-gray-200 uppercase"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Social links */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 mt-10">
                <a href="#">
                  <FaInstagram className="text-3xl"></FaInstagram>
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl"></FaFacebook>
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl"></FaLinkedin>
                </a>
              </div>
              <div className="mt-6 mb-2">
                <div className="flex items-center gap-3">
                  <FaLocationArrow></FaLocationArrow>
                  <p>Noida,Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt></FaMobileAlt>
                  <p>+91 9877358790</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
 