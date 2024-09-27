import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';
import Title from '../components/Title';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for inovation and a desire to
            revolutions the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore and purchase a wide range of products from the
            comfort of their homes
          </p>
          <p>
            Since our inception, we&apos;ve worked tirelessly to curate a
            diverse selection of high-quality products that cater to taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive sourced from trusted brands and
            suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choices,
            convenience and confidence. We&apos;re dedicated to providing a
            seamless shopping experience that exceeds expectationss from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Qulaity Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, numquam necessitatibus commodi ipsam sit libero .
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            fugit numquam, officia ratione harum.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel
            autem harum perspiciatis rem! Atque,.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
