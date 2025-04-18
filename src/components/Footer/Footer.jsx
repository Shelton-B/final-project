import "../Footer/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text"> Developed by Shelton Brockett</p>
      <p className="footer__text">{currentYear}</p>
    </footer>
  );
}

export default Footer;
