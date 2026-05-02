import Image from "next/image";
import Link from "next/link";
import { FaDollarSign} from "react-icons/fa";
const ViewCard = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://assignment-08-green-two.vercel.app/data.json");
    const data = await res.json();
    const aectpCourse = data.find(c => c.id == id);
    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="relative w-full h-75">
                    <Image
                        src={aectpCourse.image}
                        alt={aectpCourse.title}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{aectpCourse.title}</h1>
                    <p className="text-gray-500">Instructor: {aectpCourse.description}</p>
                    <p className="text-gray-500">Duration: {aectpCourse.category}</p>
                    <p className="text-gray-500">Level: {aectpCourse.currency}</p>
                    <p className="text-yellow-500 font-semibold">
                      <FaDollarSign /> {aectpCourse.price}
                    </p>
                    <div>
                        {aectpCourse.inStock ? (
                        <span className="text-green-500 font-bold text-s">In Stock</span>
                    ) : (
                        <span className="text-red-500 font-bold text-s">Out of Stock</span>
                    )}
                    </div>
                    
                    <button className="cursor-pointer bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600">
                        Enroll Now
                    </button>
                    <Link href={"/allCourse"}>
                        <button className="cursor-pointer bg-black ml-5 text-white px-6 py-2 rounded-md">
                            Back Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ViewCard;