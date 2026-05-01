"use client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logos from "@/acesst/logo.png"
import { authClient } from "@/lib/auth-client";
import { Puff } from "react-loader-spinner";


const Navber = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;
    const handellogout = async () => {
        await authClient.signOut();
    }
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image alt="logo" width={60} height={80} src={logos}></Image>
                    <Link href="/" className="text-2xl font-bold text-indigo-600">
                        Tiles Gallery
                    </Link>
                </div>

                <div className="md:flex items-center gap-8 font-medium">
                    <Link href="/" className="hover:text-indigo-600 transition">
                        Home
                    </Link>
                    <Link href="/allCourse" className="hover:text-indigo-600 transition">
                        All Tiles
                    </Link>
                    <Link href="/profile" className="hover:text-indigo-600 transition">
                        My Profile
                    </Link>
                </div>

                {isPending ? (
                    <Puff
                        visible={true}
                        height="40"
                        width="40"
                        color="#9C908E"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                ) : !user ? (
                    <div className="md:flex items-center gap-3">
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
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Button>Hi Dear {user?.name}</Button>
                        <Avatar>
                            <Avatar.Image alt={user?.name} src={user?.image} />
                            <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                        </Avatar>
                        <Button onClick={handellogout} variant="danger">
                            Logout
                        </Button>
                        
                    </div>
                )}

            </div>
        </nav>
    );
};
export default Navber;