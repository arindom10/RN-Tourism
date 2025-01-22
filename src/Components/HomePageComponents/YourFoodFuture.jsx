const YourFoodFuture = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-6 text-center mb-16">
          <div>
            <h3 className="text-4xl font-bold text-red-700">10K+</h3>
            <p className="text-gray-700 mt-2">Students Trained</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-700">08+</h3>
            <p className="text-gray-700 mt-2">Courses Offered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-700">04</h3>
            <p className="text-gray-700 mt-2">Award-Winning</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-700">5K+</h3>
            <p className="text-gray-700 mt-2">Alumni Success</p>
          </div>
        </div>
        <div className="text-center mb-12">
          <p className="text-sm text-yellow-600 tracking-wide uppercase">
            Resourceful Information
          </p>
          <h2 className="text-3xl font-bold text-red-800 mt-2">
            Your Food Future Starts Here
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="relative group">
            <img
              src="https://i.ibb.co.com/j5XVD03/Background-Border-2.png"
              alt="Admissions"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">01</h3>
              <p className="mt-2">Admissions</p>
            </div>
          </div>

          <div className="relative group">
            <img
              src="https://i.ibb.co.com/7Cj76m9/Background-Border-1.png"
              alt="How to Apply"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">02</h3>
              <p className="mt-2">How to Apply</p>
            </div>
          </div>

          <div className="relative group">
            <img
              src="https://i.ibb.co.com/1MFv1wm/Background-Border.png"
              alt="Request Info"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">03</h3>
              <p className="mt-2">Request Info</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourFoodFuture;
