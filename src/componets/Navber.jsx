"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logos from "@/acesst/logo.png"

const Navber = () => {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image alt="logo" width={60} height={80} src={logos}></Image>
                    <Link href="/" className="text-2xl font-bold text-indigo-600">
                        SkillSphere
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    <Link href="/" className="hover:text-indigo-600 transition">
                        Home
                    </Link>
                    <Link href="/courses" className="hover:text-indigo-600 transition">
                        Courses
                    </Link>
                    <Link href="/profile" className="hover:text-indigo-600 transition">
                        My Profile
                    </Link>
                </div>

                {/* Buttons */}
                <div className=" md:flex items-center gap-3">
                    <Link href="/login">
                        <Button variant="outline">Login</Button>
                    </Link>
                    <Link href="/registrar">
                        <Button variant="outline">Register</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navber;