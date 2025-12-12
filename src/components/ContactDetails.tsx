import React from 'react';

const ContactDetails = () => {
  return (
    <section
      className="w-full py-20 flex items-start justify-center text-white font-clash"
    >
      <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-24 px-8 md:px-24 pt-32">

        {/* FOLLOW */}
        <div className="space-y-6">
          <p className="text-[11px] tracking-[0.3em] opacity-60">FOLLOW ME</p>

          <div className="space-y-4 text-[20px] font-bold">
            <a href="#" className="flex items-center gap-2 hover:opacity-70">
              INSTAGRAM
              <span className="inline-block translate-y-[-2px]">↗</span>
            </a>

            <a href="#" className="flex items-center gap-2 hover:opacity-70">
              LINKEDIN
              <span className="inline-block translate-y-[-2px]">↗</span>
            </a>

            <a href="#" className="flex items-center gap-2 hover:opacity-70">
              FACEBOOK
              <span className="inline-block translate-y-[-2px]">↗</span>
            </a>
          </div>
        </div>

        {/* LOCATION */}
        <div className="space-y-6">
          <p className="text-[11px] tracking-[0.3em] opacity-60">CURRENT LOCATION</p>

          <div className="space-y-6 text-[18px] font-semibold leading-relaxed">

            <div>
              #232, 18TH A MAIN, 100 FEET ROAD,<br />
              INDIRANAGAR, HAL 2ND STAGE,<br />
              BANGALORE - 560008
            </div>

            <div>
              J-3-F-4, DILSHAD COLONY,<br />
              SHAHDARA,<br />
              DELHI - 110095
            </div>

            <div>
              NO 1-98/3/5/23 TO 27, 4TH FLOOR,<br />
              BIZNESS SQUARE, JUBILEE ENCLAVE ROAD<br />
              MADHAPUR, HYDERABAD - 500081
            </div>

            <div>
              TS 0501, 67-B, GOPAL MANSION,<br />
              GURUNANK ROAD, BANDRA WEST,<br />
              MUMBAI - 400050
            </div>

          </div>
        </div>

        {/* PHONE */}
        <div className="space-y-6">
          <p className="text-[11px] tracking-[0.3em] opacity-60">PHONE</p>

          <div className="space-y-4 text-[18px] font-bold">
            <div>IND&nbsp;&nbsp;&nbsp;&nbsp;+91 9742426883</div>
            <div>UAE&nbsp;&nbsp;&nbsp;&nbsp;+11 4945 78297</div>
          </div>
        </div>

        {/* EMAIL */}
        <div className="space-y-6">
          <p className="text-[11px] tracking-[0.3em] opacity-60">EMAIL ME</p>

          <div className="space-y-4 text-[18px] font-bold">
            <div>HELLO@IDENTITYWORLD.IN</div>
            <div>INFO@IDENTITYWORLD.IN</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactDetails;
