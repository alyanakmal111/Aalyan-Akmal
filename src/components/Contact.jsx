const Contact = () => {
  return (
    <div
      className="px-6 max-w-[1000px] mx-auto py-12 grid place-items-center"
      id="contact"
    >
      <h2 className="text-3xl  font-bold text-center mb-10 text-white bg-primary-color rounded-3xl  py-2 px-3">
        Contact Me
      </h2>
      <form
        action="https://formspree.io/f/myzgzazp"
        method="POST"
        className="max-w-[600px] w-full text-center p-5 md:p-12 bg-gray-800 rounded-lg shadow-lg"
        id="form"
      >
        <p className="text-gray-100 font-bold text-xl mb-4">Let’s connect!</p>
        <input
          type="text"
          id="name"
          placeholder="Your Name ..."
          name="name"
          className="mb-4 w-full rounded-md border border-gray-400 py-2 pl-4 pr-4 bg-gray-700 text-gray-100"
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email ..."
          name="email"
          className="mb-4 w-full rounded-md border border-gray-400 py-2 pl-4 pr-4 bg-gray-700 text-gray-100"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="4"
          placeholder="Your Message ..."
          className="mb-4 w-full rounded-md border border-gray-400 py-2 pl-4 pr-4 bg-gray-700 text-gray-100"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
