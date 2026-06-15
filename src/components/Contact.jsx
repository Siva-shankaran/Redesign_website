import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_d0fyi0t",
        "template_bymytdn",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "-12qQA4qw5PoKG1EQ"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setLoading(false);
        setTimeout(() => setStatus(""), 4000);
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
        setLoading(false);
        setTimeout(() => setStatus(""), 4000);
      });
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-orange-500 mt-1 shrink-0" />,
      label: "Phone",
      value: "+91 9790354410",
      href: "tel:+919790354410",
    },
    {
      icon: <FaEnvelope className="text-orange-500 mt-1 shrink-0" />,
      label: "Email",
      value: "formcraftconsultancy@gmail.com",
      href: "mailto:formcraftconsultancy@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-orange-500 mt-1 shrink-0" />,
      label: "Location",
      value: "Ramapuram, Chennai",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      {/* Section header */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold text-sm">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold mt-2 text-gray-900">Contact Us</h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            Have a project in mind? Reach out and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Two-column layout: info left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left: contact info panel */}
          <div className="lg:col-span-2 bg-[#111] rounded-2xl p-8 text-white flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold mb-1">Let's Talk</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                We're a one-stop formwork engineering partner. Tell us what you need — we'll handle the rest.
              </p>

              <div className="space-y-6">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-white text-sm font-medium hover:text-orange-400 transition-colors break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative bottom accent */}
            <div className="mt-10 flex gap-2">
              <div className="w-8 h-1 bg-orange-500 rounded-full" />
              <div className="w-4 h-1 bg-orange-500/40 rounded-full" />
              <div className="w-2 h-1 bg-orange-500/20 rounded-full" />
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <form onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Tell us about your project or requirement..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-semibold py-4 rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message →"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast notifications */}
      {status === "success" && (
        <div className="fixed bottom-6 right-6 bg-white border border-gray-100 shadow-xl text-gray-900 px-5 py-4 rounded-2xl z-[999] flex items-start gap-4 max-w-sm animate-fade-in">
          <FaCheckCircle className="text-orange-500 text-xl mt-0.5 shrink-0" />
          <div>
            <h3 className="font-bold text-sm">Message sent!</h3>
            <p className="text-gray-500 text-xs mt-0.5">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="fixed bottom-6 right-6 bg-white border border-red-100 shadow-xl text-gray-900 px-5 py-4 rounded-2xl z-[999] flex items-start gap-4 max-w-sm">
          <FaTimesCircle className="text-red-500 text-xl mt-0.5 shrink-0" />
          <div>
            <h3 className="font-bold text-sm">Something went wrong</h3>
            <p className="text-gray-500 text-xs mt-0.5">
              Please try again or email us directly at formcraftconsultancy@gmail.com
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
