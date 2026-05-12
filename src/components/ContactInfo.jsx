import React from 'react';

const ContactInfo = () => {
  return (
    <section
      className="flex flex-col items-center text-center sm:px-12 py-12 motion-safe:animate-slide-up"
      aria-label="Contact Information"
    >
      <div className="w-full max-w-4xl bg-black/60 text-neutral-50 rounded-2xl p-8 sm:p-10 shadow-xl border border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>

        <p className="mb-8 text-neutral-200 max-w-xl mx-auto">
          I'm open to work and collaborations — feel free to reach out via
          email, phone, or social media.
        </p>

        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <li className="flex items-center gap-4 w-full min-w-0 rounded-xl border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10">
            <span className="flex-none w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">
              <svg aria-hidden="true" className="w-6 h-6 text-neutral-50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 7.236L12 12.764L4 7.236V6L12 11.528L20 6V7.236Z" />
              </svg>
            </span>
            <a
              href="mailto:mcgilibag123@gmail.com"
              className="min-w-0 text-sm sm:text-base break-words hover:text-yellow-300 transition"
            >
              mcgilibag123@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-4 w-full min-w-0 rounded-xl border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10">
            <span className="flex-none w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">
              <svg aria-hidden="true" className="w-6 h-6 text-neutral-50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.03-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 3.5A1 1 0 013 2.5H6.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.03l-2.2 2.2z" />
              </svg>
            </span>
            <a href="tel:+639706097532" className="min-w-0 text-sm sm:text-base hover:text-yellow-300 transition">
              +63 970 609 7532
            </a>
          </li>
          <li className="flex items-center gap-4 w-full min-w-0 rounded-xl border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10">
            <span className="flex-none w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">
              <svg aria-hidden="true" className="w-6 h-6 text-neutral-50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.062-2.062c0-1.138.924-2.062 2.062-2.062 1.138 0 2.062.924 2.062 2.062 0 1.138-.924 2.062-2.062 2.062zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                />
              </svg>
            </span>
            <a href="https://www.linkedin.com/in/mcgil-libag" target="_blank" rel="noopener noreferrer" className="min-w-0 text-sm sm:text-base hover:text-yellow-300 transition">
              My Profile
            </a>
          </li>

          <li className="flex items-center gap-4 w-full min-w-0 rounded-xl border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10">
            <span className="flex-none w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">
              <svg aria-hidden="true" className="w-6 h-6 text-neutral-50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </span>
            <a href="https://www.facebook.com/mcgil.libag.2024" target="_blank" rel="noopener noreferrer" className="min-w-0 text-sm sm:text-base hover:text-yellow-300 transition">
              Facebook
            </a>
          </li>

          <li className="flex items-center gap-4 w-full min-w-0 rounded-xl border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10">
            <span className="flex-none w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">
              <svg aria-hidden="true" className="w-6 h-6 text-neutral-50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </span>
            <a href="https://github.com/McGillll" target="_blank" rel="noopener noreferrer" className="min-w-0 text-sm sm:text-base hover:text-yellow-300 transition">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactInfo;
