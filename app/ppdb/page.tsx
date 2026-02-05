
export default function PPDB() {
    return (
        <main className="flex flex-col items-center w-full watermark-bg">
            {/* Hero Section */}
            <section className="w-full px-4 sm:px-10 py-5 flex justify-center">
                <div className="w-full max-w-[1100px] rounded-xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-black/40 z-10 rounded-xl"></div>
                    <div
                        className="relative min-h-[500px] flex flex-col gap-6 items-center justify-center p-8 bg-cover bg-center rounded-xl z-0"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACPZWsxvZtNwYEmesnOikh9Y7ZLqulXko3IFkRexb0RbRWgsma5Ebe7NpTuPBAjYtI2Oa9c9eH7qb7244ygJD3EYEgdzfTDOtpdCzbpQ9h2F23dgqboN7ZsMiwUYeWNVCTc5LMYqZkP3t1HA4kFIpze6q-E9ybVZW4meqVJvJ0Nzsy-eHY4l60x7dCOaFKn7nRZG-4Roo6ubAfgFNUevIvb_AVeU499IXtOz9HWSzmqJooV9WNoVONX7HOqmYRBSSUPg40NEFVsK4U")' }}
                    >
                        <div className="z-20 flex flex-col gap-4 text-center max-w-[800px]">
                            <span className="text-white/90 text-sm font-bold uppercase tracking-widest bg-primary/80 px-3 py-1 rounded-full w-fit mx-auto backdrop-blur-sm">Admissions Open</span>
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                                Penerimaan Peserta Didik Baru (PPDB) 2024/2025
                            </h1>
                            <h2 className="text-white/90 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                                Join the vocational school of choice. Build your future with SMK Mudita Singkawang based on character and competence.
                            </h2>
                        </div>
                        <div className="z-20 flex flex-col sm:flex-row gap-4 mt-4">
                            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-accent-gold hover:bg-[#FFB300] text-[#181111] text-base font-bold shadow-lg transform hover:scale-105 transition-all duration-200">
                                Apply Online Now
                            </button>
                            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold transition-all">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Quick Info */}
            <section className="w-full max-w-[960px] px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-surface-dark p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 text-center">
                    <div className="text-primary font-bold text-3xl">6</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Majors</div>
                </div>
                <div className="bg-white dark:bg-surface-dark p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 text-center">
                    <div className="text-primary font-bold text-3xl">100%</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Accredited</div>
                </div>
                <div className="bg-white dark:bg-surface-dark p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 text-center">
                    <div className="text-primary font-bold text-3xl">24h</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Online Support</div>
                </div>
                <div className="bg-white dark:bg-surface-dark p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 text-center">
                    <div className="text-primary font-bold text-3xl">A</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Grade School</div>
                </div>
            </section>

            {/* Enrollment Flow (Infographic) */}
            <section className="w-full max-w-[960px] px-4 py-10">
                <div className="mb-8">
                    <h2 className="text-[#181111] dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight">Enrollment Flow</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">Follow these 4 simple steps to become a student.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 -z-10 transform translate-y-1/2"></div>
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm relative group hover:border-primary transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 shadow-lg z-10 border-4 border-white dark:border-surface-dark">
                            <span className="material-symbols-outlined text-3xl">app_registration</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 dark:text-white">1. Register Online</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Fill out the PPDB form and create your student account.</p>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm relative group hover:border-primary transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-surface-dark border-2 border-primary text-primary flex items-center justify-center mb-4 shadow-md z-10">
                            <span className="material-symbols-outlined text-3xl">upload_file</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 dark:text-white">2. Upload Docs</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Submit required documents (KK, Diploma, Photos) digitally.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm relative group hover:border-primary transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-surface-dark border-2 border-primary text-primary flex items-center justify-center mb-4 shadow-md z-10">
                            <span className="material-symbols-outlined text-3xl">edit_note</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 dark:text-white">3. Test & Interview</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Attend the academic potential test and interview session.</p>
                    </div>
                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm relative group hover:border-primary transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-surface-dark border-2 border-primary text-primary flex items-center justify-center mb-4 shadow-md z-10">
                            <span className="material-symbols-outlined text-3xl">check_circle</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 dark:text-white">4. Re-registration</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">If accepted, complete administrative fees and official enrollment.</p>
                    </div>
                </div>
            </section>

            {/* Main Content Grid: Timeline & Requirements */}
            <section className="w-full max-w-[960px] px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Timeline Column */}
                <div className="flex flex-col">
                    <h2 className="text-[#181111] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6 border-b border-gray-100 dark:border-gray-800 mb-6">Registration Timeline</h2>
                    <div className="flex flex-col gap-0">
                        {/* Item 1 */}
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="size-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 flex items-center justify-center shrink-0 z-10">
                                    <span className="material-symbols-outlined text-xl">calendar_month</span>
                                </div>
                                <div className="w-0.5 bg-green-200 dark:bg-green-900 h-full"></div>
                            </div>
                            <div className="pb-8 pt-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-[#181111] dark:text-white text-lg font-bold">Gelombang 1 (Early Bird)</h3>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 uppercase tracking-wide">Open Now</span>
                                </div>
                                <p className="text-primary font-medium text-sm mb-2">Feb 1 - April 30, 2024</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Special discount on development fees. Priority seat allocation.</p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center shrink-0 z-10 border-2 border-white dark:border-surface-dark">
                                    <span className="material-symbols-outlined text-xl">event_upcoming</span>
                                </div>
                                <div className="w-0.5 bg-gray-200 dark:bg-gray-800 h-full"></div>
                            </div>
                            <div className="pb-8 pt-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-gray-700 dark:text-gray-300 text-lg font-bold">Gelombang 2 (Regular)</h3>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 uppercase tracking-wide">Upcoming</span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm mb-2">May 1 - June 30, 2024</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Regular admission fees apply. Subject to remaining seat availability.</p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center shrink-0 z-10 border-2 border-white dark:border-surface-dark">
                                    <span className="material-symbols-outlined text-xl">school</span>
                                </div>
                            </div>
                            <div className="pt-1">
                                <h3 className="text-gray-700 dark:text-gray-300 text-lg font-bold mb-1">Start of Academic Year</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm mb-2">July 15, 2024</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">MPLS (Orientation) begins for all new students.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Requirements Column */}
                <div className="flex flex-col">
                    <h2 className="text-[#181111] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6 border-b border-gray-100 dark:border-gray-800 mb-6">Requirements Checklist</h2>
                    <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Prepare digital scans of the following documents before applying.</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 text-primary">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#181111] dark:text-white">Kartu Keluarga (KK)</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Scan of original Family Card.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 text-primary">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#181111] dark:text-white">Akta Kelahiran</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Scan of original Birth Certificate.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 text-primary">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#181111] dark:text-white">Ijazah / SKL SMP/MTs</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Diploma or Certificate of Graduation.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 text-primary">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#181111] dark:text-white">Pas Foto (3x4)</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Red background, formal attire (File format: JPG/PNG).</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 text-primary">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#181111] dark:text-white">KIP / KPS / PKH (Optional)</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Scan of welfare cards if applicable for scholarships.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                            <a className="flex items-center gap-2 text-primary font-bold text-sm hover:underline" href="#">
                                <span className="material-symbols-outlined text-lg">download</span>
                                Download Complete Guide PDF
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800 py-12">
                <div className="max-w-[800px] mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-[#181111] dark:text-white text-2xl font-bold mb-2">Frequently Asked Questions</h2>
                        <p className="text-gray-500 dark:text-gray-400">Common questions about the admission process.</p>
                    </div>
                    <div className="space-y-4">
                        {/* FAQ Item 1 */}
                        <details className="group bg-background-light dark:bg-background-dark rounded-lg p-4 [&_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-primary/20">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
                                <h3 className="font-bold">How much is the registration fee?</h3>
                                <span className="material-symbols-outlined transition duration-300 group-open:-rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                                The registration form fee is IDR 150.000. Development fees vary by major and registration wave. Early bird registrants get a 20% discount on development fees.
                            </p>
                        </details>
                        {/* FAQ Item 2 */}
                        <details className="group bg-background-light dark:bg-background-dark rounded-lg p-4 [&_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-primary/20">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
                                <h3 className="font-bold">Can I change my major after applying?</h3>
                                <span className="material-symbols-outlined transition duration-300 group-open:-rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                                Yes, you can request a change of major during the interview phase, provided there are still seats available in the desired major.
                            </p>
                        </details>
                        {/* FAQ Item 3 */}
                        <details className="group bg-background-light dark:bg-background-dark rounded-lg p-4 [&_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-primary/20">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
                                <h3 className="font-bold">Is there a scholarship program?</h3>
                                <span className="material-symbols-outlined transition duration-300 group-open:-rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                                SMK Mudita offers merit-based scholarships for students with high academic or non-academic achievements. We also facilitate government aid (PIP) for eligible students.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Contact / Help */}
            <section className="w-full max-w-[960px] px-4 py-16 text-center">
                <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 md:p-12 border border-primary/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-4">support_agent</span>
                    <h2 className="text-2xl font-bold text-[#181111] dark:text-white mb-3">Still have questions?</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-8">Our admission office is available Monday to Saturday, 08:00 - 14:00. We are happy to help you with the process.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                            <span className="material-symbols-outlined">chat</span>
                            Chat via WhatsApp
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-600 text-[#181111] dark:text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-symbols-outlined">call</span>
                            (0562) 631-xxx
                        </button>
                    </div>
                </div>
            </section>

            {/* Bottom Spacer for Sticky Bar */}
            <div className="h-24 md:h-0"></div>

            {/* Sticky CTA Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-surface-dark border-t border-primary/20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-50 md:hidden">
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 bg-accent-gold hover:bg-[#FFB300] text-[#181111] text-lg font-bold shadow-md transition-colors">
                    Apply Online Now
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>

            {/* Floating Action Button for Desktop */}
            <div className="hidden md:block fixed bottom-8 right-8 z-50">
                <button className="flex items-center gap-3 rounded-full h-14 pl-6 pr-2 bg-accent-gold hover:bg-[#FFB300] text-[#181111] text-lg font-bold shadow-xl transform hover:-translate-y-1 transition-all group">
                    Apply Now
                    <div className="size-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                </button>
            </div>
        </main>
    );
}
