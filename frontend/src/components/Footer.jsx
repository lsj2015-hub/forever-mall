import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} alt="logo image" className="mt-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            maxime ut quidem necessitatibus natus, id, qui optio iste odio
            commodi laudantium velit cumque numquam a nesciunt praesentium iure
            dolor impedit.
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Right Reseved
        </p>
      </div>
    </div>
  );
};

export default Footer;
