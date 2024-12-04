const Footer: React.FC = () => {
  return (
    <section id="contact" className="px-6 py-12 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
      <form className="grid gap-4 max-w-md">
        <input type="text" placeholder="Name" className="p-2 border rounded-md" />
        <input type="email" placeholder="Email" className="p-2 border rounded-md" />
        <textarea placeholder="Message" className="p-2 border rounded-md"></textarea>
        <button className="p-2 bg-blue-500 text-white rounded-md">Send</button>
      </form>
      <div className="mt-4">
        <p>Email: friatweld@gmail.com</p>
        <p>Phone: +251 92 064 1902</p>
        <div className="flex mt-2">
          <a href="#" className="mx-2 text-blue-500">LinkedIn</a>
          <a href="#" className="mx-2 text-blue-500">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
