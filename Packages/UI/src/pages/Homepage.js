export const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="text-center p-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-xl text-gray-600">
          Rapidly build modern websites without ever leaving your HTML.
        </p>
        <a
          href="#"
          className="mt-6 inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </a>
      </header>
      <main className="p-10">
        {/* Additional content sections can go here */}
      </main>
    </div>
  );
};

export default Homepage;
