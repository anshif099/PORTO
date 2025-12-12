import React from "react";
import handshake from "@/assets/handshake.jpg"; // put your image path here

const ContactForm = () => {
  return (
    <section className="w-full py-20 flex items-center justify-center font-[Clash Display]">
      <div className="max-w-[1400px] w-full px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">

          <h1 className="text-[32px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-tight font-bold uppercase">
            LET'S CREATE <br /> EXTRAORDINARY!
          </h1>

          <p className="text-white/60 mt-4 max-w-md text-sm sm:text-base">
            Reach out and let's create something amazing together. Let's achieve greatness.
          </p>

          <p className="mt-10 text-sm tracking-wide uppercase">Fill THIS form out</p>

          {/* FORM */}
          <form className="mt-4 space-y-4 max-w-lg">

            <input
              type="text"
              placeholder="Name*"
              className="w-full px-5 py-4 bg-black/60 rounded-xl border border-white/5 text-white outline-none focus:border-white/20"
            />

            <input
              type="email"
              placeholder="Email*"
              className="w-full px-5 py-4 bg-black/60 rounded-xl border border-white/5 text-white outline-none focus:border-white/20"
            />

            <textarea
              placeholder="Message*"
              rows={4}
              className="w-full px-5 py-4 bg-black/60 rounded-xl border border-white/5 text-white outline-none resize-none focus:border-white/20"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-white text-black text-sm uppercase tracking-wide font-semibold hover:bg-black hover:text-white transition-all border border-white"
            >
              Submit Now
            </button>

          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src={handshake}
            alt="Handshake"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
