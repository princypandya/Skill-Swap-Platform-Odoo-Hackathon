import React from 'react';

const Home = () => {
  return (
    <section className="max-w-4xl mx-auto mt-10 text-center">
      <h2 className="text-3xl font-semibold mb-4">Swap Skills. Learn Together.</h2>
      <p className="text-gray-700 mb-6">
        Offer what you know. Learn what you don't. Connect with people to exchange skills — completely free.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Post a Skill</button>
        <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">Browse Skills</button>
      </div>
    </section>
  );
};

export default Home;
