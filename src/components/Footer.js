import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <p>&copy; Sebastian Kučera 2023</p>

        <button className="button-facebook" type="button"><Link to="https://www.facebook.com"><AiFillFacebook className="icon-facebook" /></Link></button>
        <button className="button-instagram" type="button"><Link to="https://www.instagram.com/sebastiankucera"><AiFillInstagram className="icon-instagram" /></Link></button>
        <button className="button-tiktok" type="button"><Link to="https://www.tiktok.com/@robertino196406"><FaTiktok className="icon-tiktok" /></Link></button>
    </footer>
  )
}

export default Footer;