import Image from "next/image";
import Link from "next/link";
import imagel from "@/acesst/image.png"
const Found = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
            <div className="max-w-xl">
                <div className="text-[150px] md:flex items-center justify-center">
                    <div>
                        <h1 className="font-black leading-none text-red-600 md:text-[150px]">
                            404
                        </h1>
                    </div>
                    <div>
                       <Image src={imagel} alt="404 image" />
                    </div>
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Oops! Page Not Found
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-600">
                    The page you are looking for doesnt exist or has been moved.
                </p>
                <div className="mt-5">
                    <Link
                        href="/"
                        className="rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 transition-colors"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
            
        </main>
    );
};

export default Found;