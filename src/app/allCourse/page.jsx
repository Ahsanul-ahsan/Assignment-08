import CourseCard from "@/componets/CourseCard";
import {SearchField } from "@heroui/react";

const dataFetch = async () => {
    const res = await fetch("https://assignment-08-green-two.vercel.app/data.json")
    const data = await res.json();
    return data;

}
const AllCourse = async () => {
    const products = await dataFetch();

    return (
        <div className="max-w-6xl mx-auto mt-8 mb-8">
            <div className="flex justify-between items-center max-w-6xl px-6 mb-5">
                <h1 className="mb-5 text-2xl text-green-500 font-bold">All Tiles</h1>
                <div>
                    <SearchField name="search">
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input className="w-[280px]" placeholder="Search..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-5 place-items-center">
                {
                    products.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }

            </div>


        </div>
    );
};

export default AllCourse;