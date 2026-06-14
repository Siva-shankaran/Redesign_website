const clients = [
  "CASAGRAND",
  "SHRIRAM",
  "L&W CPL",
  "SOBHA",
  "NCC URBAN",
  "VERTEX HOMES",
];

function Clients() {
  return (
    <section className="py-24 bg-white overflow-hidden">

      <h2 className="text-5xl font-bold text-center mb-16">
        Trusted By
      </h2>

      <div className="overflow-hidden">

        <div className="flex gap-16 whitespace-nowrap animate-marquee">

          {[...clients, ...clients].map((client, index) => (

            <div
              key={index}
              className="text-3xl font-bold text-gray-300 hover:text-orange-500 transition"
            >
              {client}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Clients;