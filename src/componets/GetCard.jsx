import Link from "next/link";
import TileCard from "./TileCard";

const dataFetch = async () => {
    const res = await fetch("https://assignment-08-green-two.vercel.app/data.json")
    const data = await res.json();
    const shortData = data.sort((a, b) => b.price - a.price).slice(0, 3);
    return shortData;
}
const GetCard = async () => {
    const products = await dataFetch();
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center max-w-6xl px-6 mb-5">
                <h1 className="mb-5 text-2xl text-blue-500 font-bold">Top Rated Tile</h1>
                <Link href={"/allCourse"}>
                    <p className="font-bold text-blue-500 hover:underline">View All</p>
                </Link>
            </div>

            <div className="grid grid-cols-3 gap-5 place-items-center">
                {
                    products.map(tile =>  <TileCard key={tile.id} tile={tile} ></TileCard>)
                }
            </div>
        </div>
    );
};

export default GetCard;