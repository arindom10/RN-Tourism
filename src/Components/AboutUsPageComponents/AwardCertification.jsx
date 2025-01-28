const AwardCertification = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Be part of a close-knit community, where everyone knows your
            language—food.
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            At RNTHI, you will find all the ingredients you need to create a
            college experience that is uniquely yours—guided by your passions,
            your interests, and your imagination. Each of our campuses offers a
            distinct flavor, a unique feel; yet at everyone, you will be part of
            a tight-knit, diverse community of students and instructors from all
            over the world, united in your shared passion for food.
          </p>

          <h3 className="font-bold text-xl sm:text-2xl mb-4">
            ACCREDITATION AND RECOGNITION
          </h3>

          <div className="flex flex-wrap justify-start gap-6">
            <a href="https://imgbb.com/">
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                src="https://i.ibb.co.com/qMpCrGc/WORLDCHEFS-Logo-1.png"
                alt="WORLDCHEFS-Logo-1"
              />
            </a>
            <a href="https://imgbb.com/">
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                src="https://i.ibb.co.com/YRLfCXz/RPL-BTEB-NSDA2-1.png"
                alt="RPL-BTEB-NSDA2-1"
              />
            </a>
            <a href="https://imgbb.com/">
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                src="https://i.ibb.co.com/d7qzVT2/RPL-BTEB-NSDA-3.png"
                alt="RPL-BTEB-NSDA-3"
              />
            </a>
            <a href="https://imgbb.com/">
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                src="https://i.ibb.co.com/55tFdM8/RPL-BTEB-NSDA-4.png"
                alt="RPL-BTEB-NSDA-4"
              />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <a href="https://imgbb.com/">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src="https://i.ibb.co.com/XXMwJvC/Section-1.png"
              alt="Section-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AwardCertification;
