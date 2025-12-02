import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import contact_illustration from '../assets/contact-illustration.png'

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
            {/* Header */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:justify-between gap-12">
                {/* Text Section */}
                <div className="flex-1">
                    <p className="text-gray-600 mb-2 text-base md:text-lg">How can we help you?</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact us</h1>
                    <p className="text-gray-700 mb-8 text-base md:text-lg leading-relaxed">
                        We’re here to help and answer any questions you might have. We look forward to hearing from you!
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-4 text-gray-700 text-base md:text-lg">
                        <div className="flex items-center gap-4">
                            <HiOutlineLocationMarker className="text-3xl text-gray-800" />
                            <span>Ankersgade 12C, 1, 8000 Aarhus</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <HiOutlinePhone className="text-3xl text-gray-800" />
                            <span>+45 71 99 77 07</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <HiOutlineMail className="text-3xl text-gray-800" />
                            <a href="mailto:mail@sleeknote.com" className="underline hover:text-gray-900">
                                mail@sleeknote.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={contact_illustration}
                        alt="Contact Illustration"
                        className="w-full max-w-lg md:max-w-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
