const Footer = () => {
    return (
      <footer className="w-full py-4 bg-gray-200 text-white text-center text-sm">
  <div className="max-w-7xl mx-auto px-4">
    <p>
      <span className="text-black">
      © {new Date().getFullYear()} MovieMania |</span> <a href="/privacy" className="text-teal-800 hover:underline">Privacy Policy</a> <span className="text-black">|</span> <a href="/terms" className="text-teal-800 hover:underline">Terms of Service</a>
    </p>
  </div>
</footer>

    );
  };
  
  export default Footer;
  