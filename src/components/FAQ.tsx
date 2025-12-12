import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: "01",
    question:
      "WHAT TYPES OF EVENTS DOES IDENTITY SPECIALIZE IN, AND WHAT IS THE TYPICAL SCALE OF EVENTS YOU HANDLE?",
    answer:
      "This question addresses the agency's expertise and capacity, allowing potential clients to understand if their event aligns with Identity's portfolio.",
  },
  {
    id: "02",
    question:
      "CAN IDENTITY PROVIDE A COMPREHENSIVE RANGE OF SERVICES, INCLUDING CONCEPTUALIZATION, PLANNING, EXECUTION, AND POST-EVENT ANALYSIS, OR ARE CERTAIN SERVICES OUTSOURCED?",
    answer:
      "This query clarifies the agency's scope and whether they offer end-to-end solutions or rely on external vendors.",
  },
  {
    id: "03",
    question:
      "HOW DOES IDENTITY APPROACH BUDGET MANAGEMENT AND ENSURE TRANSPARENCY THROUGHOUT THE EVENT PLANNING PROCESS?",
    answer:
      "Budget is a crucial aspect, and this question seeks to understand the agency's financial practices and accountability.",
  },
  {
    id: "04",
    question:
      "WHAT IS IDENTITY'S PROCESS FOR HANDLING UNEXPECTED CHALLENGES OR CONTINGENCIES DURING AN EVENT?",
    answer:
      "Events can be unpredictable, and this question assesses the agency's ability to handle unforeseen circumstances and mitigate risks.",
  },
  {
    id: "05",
    question:
      "CAN IDENTITY PROVIDE EXAMPLES OF PAST SUCCESSFUL EVENTS, AND WHAT METRICS DO YOU USE TO MEASURE EVENT SUCCESS?",
    answer:
      "This request allows potential clients to evaluate the agency's track record and understand their approach to measuring ROI.",
  },
  {
    id: "06",
    question:
      "HOW DOES IDENTITY INCORPORATE INNOVATIVE TECHNOLOGIES AND CREATIVE CONCEPTS TO ENHANCE THE EVENT EXPERIENCE?",
    answer:
      "This question aims to understand how the agency stays current with event trends, and how they provide unique and memorable experiences.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="w-full text-white font-clash"
      style={{
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
        {/* Top meta row */}
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white/60">
          <span>03</span>
          <span>//FAQ</span>
          <span>Concerns</span>
        </div>

        {/* Main heading */}
        <div className="mt-12 text-center">
          <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-tight tracking-tight uppercase">
            Frequently
          </p>
          <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-tight tracking-tight uppercase">
            Asked Questions
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-16 border-t border-white/10 divide-y divide-white/10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.id} className="flex flex-col">
                {/* Question row */}
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center gap-6 sm:gap-10 py-6 sm:py-8 text-left"
                >
                  {/* Number */}
                  <span className="w-10 text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-white/60">
                    {item.id}
                  </span>

                  {/* Question text */}
                  <span className="flex-1 text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-snug tracking-[0.1em] uppercase">
                    {item.question}
                  </span>

                  {/* Plus / minus */}
                  <span className="w-8 flex items-center justify-end text-xl sm:text-2xl">
                    <span className="inline-block leading-none">
                      {isOpen ? "–" : "+"}
                    </span>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`pl-[3.75rem] sm:pl-[4.5rem] pr-10 sm:pr-12 pb-6 sm:pb-8 transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 max-h-[400px]"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="max-w-4xl text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed text-white/70">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
