import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white hover:border-blue-200 hover:border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition w-full max-w-75 h-full flex flex-col">
           
            <div className="relative h-40 w-full">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4 space-y-2 flex-1 flex flex-col">
                <h2 className="text-md font-semibold">{course.title}</h2>

                <p className="text-sm text-gray-500">{course.instructor}</p>
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                    <FaStar />
                    <span>{course.rating}</span>
                    <span className="text-gray-400">(2.3K)</span>
                </div>
                <Link href={`/allCourse/${course.id}`}>
                    <button className="mt-auto cursor-pointer w-full border border-indigo-400 text-indigo-500 py-1.5 rounded-md text-sm hover:bg-indigo-50 transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;