import { assets } from "../assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";
import Tittle from "../Components/Tittle";

const Contact = () => {
  return (
    <div>
      <div className="border-t pt-10 text-center text-2xl">
        <Tittle text1={`CONTACT`} text2={`US`} />
        <div className="my-10 mb-28 flex flex-col justify-center gap-10 md:flex-row">
          <img
            className="w-full md:max-w-[480px]"
            src={assets.contact_img}
            alt=""
          />
          <div className="flex flex-col items-start justify-center gap-6">
            <p className="text-start text-xl font-semibold text-gray-600">
              Our Stoe
            </p>
            <p className="text-start text-gray-500">
              54709 willms station <br />
              Suite 350,washonton,USA
            </p>
            <p className="text-start text-gray-500">
              Tel:(415) 555-0132 <br /> Email: admin@forever.com
            </p>
            <p className="text-start text-xl font-semibold text-gray-600">
              Career At Forever
            </p>
            <p className="text-start text-gray-500">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-black px-8 py-4 text-sm transition-all duration-500 hover:bg-black hover:text-white">
              Explore jobs
            </button>
          </div>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
