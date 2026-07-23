import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/message/ZRTYH5VGS7O3H1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} />
      <span className="hidden sm:block">Chat with Us</span>
    </a>
  );
};

export default WhatsAppButton;