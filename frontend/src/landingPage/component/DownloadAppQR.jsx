import React from "react";

export default function DownloadAppQR() {
    return (
        <section className="w-full py-24 px-4 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        <span className="text-primary">Experience </span>Our App
                    </h2>
                    <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed">
                        Choose your platform and scan the QR code to get started with our official mobile experience.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8">

                    {/* iOS Card */}
                    <div className="group bg-white/80 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.1)] transition-all duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                            {/* Image */}
                            <div className="grid place-items-center">
                                <img
                                    src="/assets/DownloadAppImg.png"
                                    alt="Download on App Store QR Code"
                                    className="w-52 md:w-100 object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)] transition-transform duration-500 group-hover:scale-103"
                                />
                            </div>

                            {/* Content */}
                            <div className="grid gap-4">
                                <span className="inline-block w-max px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100">
                                    iOS Version
                                </span>

                                <h3 className="text-3xl font-bold text-slate-900">
                                    Download for iPhone
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-justify">
                                    Scan to experience our premium interface designed exclusively for Apple devices.
                                    Enjoy a smooth, intuitive layout crafted to match iOS design standards,
                                    delivering fast performance, the app integrates perfectly
                                    with your iPhone to give you a refined and effortless experience every day.
                                </p>



                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <p className="text-xl font-black text-slate-900">4.9★</p>
                                        <p className="text-xs text-slate-500">App Rating</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-black text-slate-900">100K+</p>
                                        <p className="text-xs text-slate-500">Downloads</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-black text-slate-900">Secure</p>
                                        <p className="text-xs text-slate-500">Verified</p>
                                    </div>
                                </div>

                                <p className="text-sm text-slate-500 italic">
                                    “One of the smoothest apps I’ve ever used. Totally worth it.”
                                </p>

                                <a
                                    href="#"
                                    className="w-max px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-xl shadow-blue-200"
                                >
                                    Get for iOS
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Android Card */}
                    <div className="group bg-white/80 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.1)] transition-all duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                            {/* Content */}
                            <div className="grid gap-4">
                                <span className="inline-block w-max px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100">
                                    Android Version
                                </span>

                                <h3 className="text-3xl font-bold text-slate-900">
                                    Download for Android
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-justify">
                                    High performance and seamless compatibility for all your Android smartphones.
                                    Designed to run smoothly across a wide range of devices, the app ensures fast
                                    loading times, you’ll get a reliable,
                                    responsive, and user-friendly experience every time.
                                </p>



                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <p className="text-xl font-black text-slate-900">4.8★</p>
                                        <p className="text-xs text-slate-500">Play Rating</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-black text-slate-900">120K+</p>
                                        <p className="text-xs text-slate-500">Downloads</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-black text-slate-900">Fast</p>
                                        <p className="text-xs text-slate-500">Performance</p>
                                    </div>
                                </div>

                                <p className="text-sm text-slate-500 italic">
                                    “Runs perfectly even on my older phone. Highly recommended.”
                                </p>

                                <a
                                    href="#"
                                    className="w-max px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-xl shadow-blue-200"
                                >
                                    Get for Android
                                </a>
                            </div>

                            {/* Image */}
                            <div className="grid place-items-center">
                                <img
                                    src="/assets/DownloadAppImg.png"
                                    alt="Download on Play Store QR Code"
                                    className="w-52 md:w-90 object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)] transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
