"use client";
import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logos from "@/acesst/logo.png";
import { authClient } from "@/lib/auth-client";
import { Puff } from "react-loader-spinner";
import { toast } from "react-toastify";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Navber = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const handellogout = async () => {
        await authClient.signOut();
        toast.warning("Logout Successfully");
        setIsOpen(false);
    };

    const navLinks = (
        <>
            <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`hover:text-indigo-600 transition ${pathname=="/" ? "text-green-500 font-bold underline" : ""}`}
            >
                Home
            </Link>
            <Link
                href="/allCourse"
                onClick={() => setIsOpen(false)}
                 className={`hover:text-indigo-600 transition ${pathname=="/allCourse" ? "text-green-500 font-bold underline" : ""}`}
            >
                All Tiles
            </Link>
            <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className={`hover:text-indigo-600 transition ${pathname=="/profile" ? "text-green-500 font-bold underline" : ""}`}
            >
                My Profile
            </Link>
        </>
    );

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            alt="logo"
                            width={55}
                            height={55}
                            src={logos}
                        />
                        <Link
                            href="/"
                            className="text-xl md:text-2xl font-bold text-indigo-600"
                        >
                            Tiles Gallery
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 font-medium">
                        {navLinks}
                    </div>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center gap-3">
                        {isPending ? (
                            <Puff
                                visible={true}
                                height="40"
                                width="40"
                                color="#9C908E"
                                ariaLabel="puff-loading"
                            />
                        ) : !user ? (
                            <>
                                <Link href="/login">
                                    <Button
                                        className="border-blue-500 font-bold hover:bg-blue-500 hover:text-white"
                                        variant="outline"
                                    >
                                        Login
                                    </Button>
                                </Link>

                                <Link href="/registrar">
                                    <Button
                                        className="border-blue-500 font-bold hover:bg-blue-500 hover:text-white"
                                        variant="outline"
                                    >
                                        Register
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Button>Hi Dear {user?.name}</Button>

                                <Avatar>
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image}
                                    />
                                    <Avatar.Fallback>
                                        {user?.name?.charAt(0)}
                                    </Avatar.Fallback>
                                </Avatar>

                                <Button
                                    onClick={handellogout}
                                    variant="danger"
                                >
                                    Logout
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-3xl text-indigo-600"
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 space-y-4 border-t pt-4">
                        <div className="flex flex-col gap-4 font-medium">
                            {navLinks}
                        </div>

                        {isPending ? (
                            <div className="flex justify-center py-4">
                                <Puff
                                    visible={true}
                                    height="40"
                                    width="40"
                                    color="#9C908E"
                                    ariaLabel="puff-loading"
                                />
                            </div>
                        ) : !user ? (
                            <div className="flex  ">
                                <Link href="/login">
                                    <Button
                                        className="w-20 border-blue-500 font-bold hover:bg-blue-500 hover:text-white"
                                        variant="outline"
                                    >
                                        Login
                                    </Button>
                                </Link>

                                <Link href="/registrar">
                                    <Button
                                        className="w-20 border-blue-500 font-bold hover:bg-blue-500 hover:text-white"
                                        variant="outline"
                                    >
                                        Register
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <Avatar.Image
                                            alt={user?.name}
                                            src={user?.image}
                                        />
                                        <Avatar.Fallback>
                                            {user?.name?.charAt(0)}
                                        </Avatar.Fallback>
                                    </Avatar>

                                    <span className="font-semibold">
                                        {user?.name}
                                    </span>
                                </div>

                                <Button
                                    onClick={handellogout}
                                    variant="danger"
                                    className="w-full"
                                >
                                    Logout
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navber;