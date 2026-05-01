 "use client"

import { ModalPage } from "@/componets/Modal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const ProfilePage = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <Card className="w-full max-w-md p-6 rounded-2xl shadow-lg relative">
                {/* Edit Icon */}
                <div className="absolute top-4 right-4">
                   <ModalPage></ModalPage>

                </div>

                {/* Avatar */}
                <div className="flex flex-col items-center gap-3">
                    <Avatar className="w-24 h-24 border-4 border-indigo-500 shadow">
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback className="text-xl">
                            {user?.name?.slice(0, 2)}
                        </Avatar.Fallback>
                    </Avatar>

                    <h2 className="text-xl font-bold">{user?.name}</h2>
                    <p className="text-gray-500 text-sm">User Profile</p>
                </div>

                {/* Info */}
                <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <FaUser className="text-indigo-500" />
                        <span className="font-medium">{user?.name}</span>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <MdEmail className="text-indigo-500" />
                        <span className="font-medium">{user?.email}</span>
                    </div>
                </div>

                {/* Edit Button */}
            </Card>
        </div>
    );
};

export default ProfilePage;