import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import logo from "@/acesst/company_logo.png"
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-white mt-5 ">
            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h1 className="text-3xl font-bold mb-3">
                            Novaskill
                        </h1>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering learners to build modern skills, explore opportunities,
                            and grow into the future of technology with confidence.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-white transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/all-tiles" className="hover:text-white transition">
                                    All Tiles
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-profile" className="hover:text-white transition">
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="hover:text-white transition">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>

                  
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-gray-400 text-sm mb-4">
                            Name: Md Ahsanul Haque Ahsan <br />
                            Email: ahforbd@gmail.com <br />
                            Phone: +880 1705717651
                        </p>

                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/profile.php?id=100089801596961" className="p-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition">
                                <FaFacebookF />
                            </a>
                            <a href="https://x.com/?lang=en" className="p-2 bg-white text-black rounded-full hover:bg-sky-500 hover:text-white transition">
                                <FaTwitter />
                            </a>
                            <a  href="https://www.instagram.com/accounts/login/?hl=en" className="p-2 bg-white text-black rounded-full hover:bg-pink-500 hover:text-white transition">
                                <FaInstagram />
                            </a>
                            <a href="https://github.com/Ahsanul-ahsan/Java-sprit" className="p-2 bg-white text-black rounded-full hover:bg-gray-700 hover:text-white transition">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2026 NovaSkill. All rights reserved.</p>

                    <div className="flex justify-center items-center gap-2 ">
                        <p className="font-bold text-white">Thanks Programming Hero</p>
                       <Image src={logo} alt="logo" width={20} height={20} />
                    </div>
                    <p className="mt-2 md:mt-0">
                        Built with ❤️ using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;