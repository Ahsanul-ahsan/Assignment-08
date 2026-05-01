import Image from "next/image";
import Link from "next/link";

const TileCard = ({ tile }) => {
    return (
        <div className="bg-white hover:border-blue-200 hover:border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition w-full max-w-75 h-full flex flex-col">

            {/* Image */}
            <div className="relative h-40 w-full">
                <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2 flex-1 flex flex-col">

                <h2 className="text-md font-semibold">
                    {tile.title}
                </h2>

                <p className="text-sm text-gray-500">
                    {tile.category} • {tile.material}
                </p>

                <p className="text-sm text-gray-600">
                    {tile.dimensions}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between">
                    <span className="text-indigo-600 font-semibold">
                        ${tile.price}
                    </span>

                    {tile.inStock ? (
                        <span className="text-green-500 text-xs">In Stock</span>
                    ) : (
                        <span className="text-red-500 text-xs">Out of Stock</span>
                    )}
                </div>

                {/* Button */}
                <Link href={`/tiles/${tile.id}`}>
                    <button className="mt-auto cursor-pointer w-full border border-indigo-400 text-indigo-500 py-1.5 rounded-md text-sm hover:bg-indigo-50 transition">
                        View Details
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default TileCard;

