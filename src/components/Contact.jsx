import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
   <section id="contact" className="py-10 bg-black  text-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <div className="flex gap-4 mb-8">

              <FaMapMarkerAlt
              className="text-orange-500 mt-1"/>

              <div>

                <h3 className="font-bold">
                  Address
                </h3>

                <p className="text-gray-300">
                  15 Bakkiyalakshmi Nagar,
                  Ramapuram,
                  Chennai - 600089
                </p>

              </div>

            </div>

            <div className="flex gap-4 mb-8">

              <FaPhoneAlt
              className="text-orange-500 mt-1"/>

              <div>

                <h3 className="font-bold">
                  Phone
                </h3>

                <p className="text-gray-300">
                  +91 9790354410
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <FaEnvelope
              className="text-orange-500 mt-1"/>

              <div>

                <h3 className="font-bold">
                  Email
                </h3>

                <p className="text-gray-300">
                  formcraftconsultancy@gmail.com
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white text-black"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl bg-white text-black"
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full p-4 rounded-xl bg-white text-black"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-4 rounded-xl bg-white text-black"
            />

            <button
              className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full">
              Send Message
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;