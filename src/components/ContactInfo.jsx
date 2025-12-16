import React from 'react';

const ContactInfo = () => {
  return (
    <section
      className="flex flex-col items-center text-center sm:px-12 py-12"
      aria-label="Contact Information"
    >
      <div className="w-full max-w-3xl bg-black/60 text-neutral-50 rounded-lg p-8 shadow-md">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact</h2>

        <p className="mb-6 text-neutral-200 max-w-xl mx-auto">
          I'm open to work and collaborations — feel free to reach out via
          email, phone, or social media.
        </p>

        <ul className="flex flex-col lg:flex-row lg:justify-between gap-4 md:items-center">
          <li className="flex items-center space-x-4 w-full md:w-auto">
            <span className="flex-none w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">
              <svg aria-hidden="true" className="w-6 h-6 text-neutral-50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 7.236L12 12.764L4 7.236V6L12 11.528L20 6V7.236Z" />
              </svg>
            </span>
            <a
              href="mailto:mcgilibag123@gmail.com"
              className="text-lg sm:text-lg hover:text-yellow-400 transition"
            >
              mcgilibag123@gmail.com
            </a>
          </li>

          <li className="flex items-center space-x-4 w-full md:w-auto">
            <span className="flex-none w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">
              <svg aria-hidden="true" className="w-6 h-6 text-neutral-50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.03-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 3.5A1 1 0 013 2.5H6.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.03l-2.2 2.2z" />
              </svg>
            </span>
            <a href="tel:+639706097532" className="text-lg sm:text-lg hover:text-yellow-400 transition">
              +63 970 609 7532
            </a>
          </li>
          <li className="flex items-center space-x-4 w-full md:w-auto">
            <span className="flex-none w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">
              <svg aria-hidden="true" className="w-6 h-6 text-neutral-50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.062-2.062c0-1.138.924-2.062 2.062-2.062 1.138 0 2.062.924 2.062 2.062 0 1.138-.924 2.062-2.062 2.062zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                />
              </svg>
            </span>
            <a href="https://www.linkedin.com/in/mcgil-libag/" className="text-lg sm:text-lg hover:text-yellow-400 transition">
              My Profile
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactInfo;
