import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <div className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl mt-20">
            <div className="max-w-4xl mx-auto px-8">
                <div className="grid md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image src="/img/2.png" width={200} height={200} alt="" />
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Empowering developers with comprehensive coding education and practical learning experiences.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-black mb-4">Learning Paths</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">
                                <span>HTML & CSS</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">
                                <span>JavaScript</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">
                                <span>React & Next.js</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">

                                <span>Node.js & Backend</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-black mb-4">Community</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">
                                <span>Leaderboard</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">
                                <span>Profile</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">
                                <span>Forum</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">
                                <span>Discord</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-black mb-4">Support</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">
                                <span>About Us</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">
                                <span>Contact</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">
                                <span>Help Center</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 hover:text-[#3D8B63] transition-colors cursor-pointer">
                                <span>Privacy Policy</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © 2025 Web Nepal. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm text-gray-500">
                            <span className="hover:text-[#3D8B63] transition-colors cursor-pointer">Terms of Service</span>
                            <span className="hover:text-[#3D8B63] transition-colors cursor-pointer">Privacy Policy</span>
                            <span className="hover:text-[#3D8B63] transition-colors cursor-pointer">Cookie Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}