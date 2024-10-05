import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="my-10 mt-40 flex grid-cols-[3fr_1fr_1fr] flex-col gap-14 text-sm sm:grid">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full text-gray-600 md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ex
            omnis ab pariatur voluptatem, ad est officiis voluptatum soluta,
            sunt ullam molestias aspernatur reprehenderit cumque explicabo
            consequuntur at quidem? Necessitatibus!
          </p>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium">COMPONY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@forecer.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright 2024@ forever.com All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
