import logo from '../../../assets/img/logo.png';

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-300 footer-center p-10  text-primary-content">
        <div className='text-black'>
          <img src={logo} alt="" />
          <p className="font-bold">
            ARL Industries Ltd. <br />
            Providing reliable tech since 1992
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
  
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
