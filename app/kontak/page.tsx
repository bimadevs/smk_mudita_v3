import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex-grow w-full flex flex-col">
      <section className="w-full bg-white dark:bg-background-dark pt-16 pb-12 px-6 lg:px-20 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-block relative mb-4">
            <div className="absolute -left-8 -top-8 text-primary opacity-10 hidden lg:block">
              <span className="material-symbols-outlined text-6xl">forum</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-neutral-dark dark:text-white relative z-10">
              Get in Touch
            </h1>
            <div className="absolute bottom-1 left-0 w-full h-3 bg-primary/10 rounded-full -z-0"></div>
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We are here to answer your questions regarding admissions, student
            affairs, and school events. Reach out to us and become part of our
            community.
          </p>
        </div>
      </section>

      <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link
              href="#"
              className="group flex items-center p-5 bg-white dark:bg-[#2a1d1e] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
            >
              <div className="size-14 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center mr-5 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">chat</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  WhatsApp
                </p>
                <p className="text-lg font-bold text-neutral-dark dark:text-white">
                  +62 812-xxxx-xxxx
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Available 9am - 4pm
                </p>
              </div>
            </Link>

            <Link
              href="#"
              className="group flex items-center p-5 bg-white dark:bg-[#2a1d1e] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
            >
              <div className="size-14 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mr-5 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-lg font-bold text-neutral-dark dark:text-white">
                  info@smkmudita.sch.id
                </p>
                <p className="text-xs text-gray-600 mt-1">General inquiries</p>
              </div>
            </Link>

            <Link
              href="#"
              className="group flex items-center p-5 bg-white dark:bg-[#2a1d1e] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
            >
              <div className="size-14 rounded-full bg-red-50 dark:bg-red-900/20 text-primary flex items-center justify-center mr-5 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Phone
                </p>
                <p className="text-lg font-bold text-neutral-dark dark:text-white">
                  (0562) 63xxxx
                </p>
                <p className="text-xs text-gray-600 mt-1">Front Office</p>
              </div>
            </Link>

            <div className="hidden lg:flex mt-4 p-8 bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl relative overflow-hidden shadow-lg items-center justify-center text-center">
              <div
                className="absolute inset-0 bg-white opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl mb-3">
                  school
                </span>
                <p className="font-bold text-lg">Visit Campus</p>
                <p className="text-sm opacity-90 mt-1 max-w-[200px]">
                  Our doors are open for prospective students and parents.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#2a1d1e] p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 relative">
              <div className="corner-motif corner-top-left"></div>
              <div className="corner-motif corner-bottom-right"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-bold text-neutral-dark dark:text-white">
                  Send us a Message
                </h3>
              </div>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold text-neutral-dark dark:text-gray-300"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-background-dark text-neutral-dark dark:text-white focus:border-primary focus:ring-primary py-3 px-4"
                      id="firstName"
                      placeholder="Enter first name"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold text-neutral-dark dark:text-gray-300"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-background-dark text-neutral-dark dark:text-white focus:border-primary focus:ring-primary py-3 px-4"
                      id="lastName"
                      placeholder="Enter last name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-bold text-neutral-dark dark:text-gray-300"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-background-dark text-neutral-dark dark:text-white focus:border-primary focus:ring-primary py-3 px-4"
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-bold text-neutral-dark dark:text-gray-300"
                    htmlFor="category"
                  >
                    I am a...
                  </label>
                  <select
                    className="rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-background-dark text-neutral-dark dark:text-white focus:border-primary focus:ring-primary py-3 px-4"
                    id="category"
                  >
                    <option>Prospective Student</option>
                    <option>Parent / Guardian</option>
                    <option>Alumni</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-sm font-bold text-neutral-dark dark:text-gray-300"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-background-dark text-neutral-dark dark:text-white focus:border-primary focus:ring-primary py-3 px-4"
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                  ></textarea>
                </div>
                <button
                  className="mt-4 w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-md transition-all flex justify-center items-center gap-2 text-lg group"
                  type="button"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative group">
        <div className="w-full h-[400px] lg:h-[500px] bg-gray-200 relative overflow-hidden border-t border-b border-gray-200 dark:border-gray-800">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB65VFVMbHfTQwRa4butjsHB_p49BmzElMFeWWNpbCiMj0SDXxDpk3z0WmsvxE27VWE_1aooPW_sxFIVPKZ-jj7OBntlmwhDqPUXfxZq3zPuwrotbQITljHrMWMFU-u-ahu7yLwe6foqi31OW5Gma7VObg3jFSPcmA1FyIagRyaTvEbekN21wa5aRGqyOvlLWfeK6fJLo4T4Cf_9m-0fSMEtIqSGHm8TK9RN9y2-_jj8-aInPLck6JRNVSS7oCAgCq-GoYtJ2bLNspt"
            alt="Map view of Singkawang city showing school location"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 pointer-events-none flex items-end lg:items-center justify-center pb-8 lg:pb-0 z-10">
            <div className="bg-white/95 dark:bg-[#181111]/90 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center gap-2 pointer-events-auto transform translate-y-0 hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-2xl">
                  location_on
                </span>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-neutral-dark dark:text-white text-lg">
                  SMK Mudita Singkawang
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Jl. Diponegoro No. XX, Singkawang
                </p>
              </div>
              <Link
                href="#"
                className="mt-2 text-xs font-bold text-primary hover:underline flex items-center gap-1"
              >
                View on Google Maps{" "}
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
