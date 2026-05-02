"use client";
import TileCard from "@/componets/TileCard";
import { SearchField, Spinner } from "@heroui/react";
import { useEffect, useState } from "react";

const AllCourse = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch("https://assignment-08-green-two.vercel.app/data.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoader(false); 
            })
            .catch((error) => {
                console.error(error);
                setLoader(false);
            });
    }, []);

    const filteredCourses = search
        ? data.filter((course) =>
              course.title.toLowerCase().includes(search.toLowerCase())
          )
        : data;

    if (loader) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spinner size="lg" label="Loading Tiles..." color="success" />
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto mt-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl px-6 mb-8">
                <h1 className="text-2xl text-green-500 font-bold">
                    All Tiles
                </h1>

                <SearchField name="search">
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            className="w-40 md:w-72"
                            placeholder="Search..."
                        />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>
            </div>

            <div className="grid md:grid-cols-3 gap-5 place-items-center">
                {filteredCourses.map((tile) => (
                    <TileCard key={tile.id} tile={tile} />
                ))}
            </div>
        </div>
    );
};

export default AllCourse;