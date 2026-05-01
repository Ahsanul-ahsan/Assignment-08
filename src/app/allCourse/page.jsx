"use client"
import TileCard from "@/componets/TileCard";
import { SearchField } from "@heroui/react";
import { useEffect, useState } from "react";
import { IoMdDoneAll } from "react-icons/io";


const AllCourse = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://assignment-08-green-two.vercel.app/data.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    const filteredCourses = search
        ? data.filter((course) =>
            course.title.toLowerCase().includes(search.toLowerCase()),
        )
        : data;

    return (
        <div className="max-w-6xl mx-auto mt-8 mb-8">
            <div className="flex justify-between items-center max-w-6xl px-6 mb-5">
                <div>
                    <h1 className="mb-5 text-2xl text-green-500 font-bold flex justify-center items-center gap-2">
                        All Tiles <IoMdDoneAll /></h1>
                </div>
                <div>
                    <SearchField name="search">
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input onChange={(e) => setSearch(e.target.value)} value={search} className="w-70" placeholder="Search..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 place-items-center">
                {
                    filteredCourses.map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
                }

            </div>


        </div>
    );
};

export default AllCourse;