import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const OurFaculty = () => {
  const facultyData = [
    {
      name: "MD. OHLDUZZAMAN",
      title: "Trainer and Training Coordinator",
      description:
        "Md. Ohlduzzaman, Trainer and Training Coordinator at RITH Bangladesh, specializes in F&B Production. Certified by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and mentor. With a solid professional background at Sheraton Dhaka and Regency Hotel, he is also proficient in Food & Beverage Management.",
      image:
        "https://i.ibb.co.com/s6cQMtQ/young-chef-university-professor-is-passing-on-the-L3-PX8-BD-jpg.png",
    },
    {
      name: "MD. OHLDUZZAMAN",
      title: "Trainer and Training Coordinator",
      description:
        "Md. Ohlduzzaman, Trainer and Training Coordinator at RITH Bangladesh, specializes in F&B Production. Certified by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and mentor. With a solid professional background at Sheraton Dhaka and Regency Hotel, he is also proficient in Food & Beverage Management.",
      image:
        "https://i.ibb.co.com/s6cQMtQ/young-chef-university-professor-is-passing-on-the-L3-PX8-BD-jpg.png",
    },
    {
      name: "MD. OHLDUZZAMAN",
      title: "Trainer and Training Coordinator",
      description:
        "Md. Ohlduzzaman, Trainer and Training Coordinator at RITH Bangladesh, specializes in F&B Production. Certified by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and mentor. With a solid professional background at Sheraton Dhaka and Regency Hotel, he is also proficient in Food & Beverage Management.",
      image:
        "https://i.ibb.co.com/s6cQMtQ/young-chef-university-professor-is-passing-on-the-L3-PX8-BD-jpg.png",
    },
    {
      name: "MD. OHLDUZZAMAN",
      title: "Trainer and Training Coordinator",
      description:
        "Md. Ohlduzzaman, Trainer and Training Coordinator at RITH Bangladesh, specializes in F&B Production. Certified by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and mentor. With a solid professional background at Sheraton Dhaka and Regency Hotel, he is also proficient in Food & Beverage Management.",
      image:
        "https://i.ibb.co.com/s6cQMtQ/young-chef-university-professor-is-passing-on-the-L3-PX8-BD-jpg.png",
    },
    {
      name: "MD. OHLDUZZAMAN",
      title: "Trainer and Training Coordinator",
      description:
        "Md. Ohlduzzaman, Trainer and Training Coordinator at RITH Bangladesh, specializes in F&B Production. Certified by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and mentor. With a solid professional background at Sheraton Dhaka and Regency Hotel, he is also proficient in Food & Beverage Management.",
      image:
        "https://i.ibb.co.com/s6cQMtQ/young-chef-university-professor-is-passing-on-the-L3-PX8-BD-jpg.png",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {facultyData.map((faculty, index) => (
          <div className="bg-[#33090a] pr-1 pb-1 " key={index}>
            <div
              className={`w-full flex flex-col items-center overflow-hidden     ${
                index % 2 === 0
                  ? "bg-[#CD9B2F] text-black"
                  : "bg-black text-white"
              }`}
            >
              <div className="mt-10">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{faculty.name}</h3>

                <div
                  className={`h-[2px] w-16 my-2 mx-auto ${
                    index % 2 === 0 ? "bg-black" : "bg-white"
                  }`}
                ></div>
                <p className="text-sm italic mb-2">{faculty.title}</p>
                <p className="text-sm mb-4">{faculty.description}</p>

                <div
                  className={`h-[1px] w-full mb-4 ${
                    index % 2 === 0 ? "bg-black" : "bg-white"
                  }`}
                ></div>

                <div className="flex justify-between items-center w-full">
                  <div className="flex space-x-3">
                    <FaFacebook className="text-lg cursor-pointer" />
                    <FaInstagram className="text-lg cursor-pointer" />
                    <FaTwitter className="text-lg cursor-pointer" />
                    <FaLinkedin className="text-lg cursor-pointer" />
                    <FaYoutube className="text-lg cursor-pointer" />
                  </div>

                  <button
                    className={`py-2 px-4 rounded text-white font-medium ${
                      index % 2 === 0 ? "bg-[#993128]" : "bg-[#66120f]"
                    }`}
                  >
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFaculty;
