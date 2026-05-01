"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {Button,Description,FieldError,Form,Input,Label,TextField} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";
import { toast } from "react-toastify";

const RegistrarPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image: photo,
            callbackURL: "/",
        });

        if (data) {
            toast.success("Registration successful!");
            router.push("/");
        }

        if (error) {
            toast.error(error.message || "Registration failed!");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">
                <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white p-8">
                   
                    <div className="text-center mb-8">
                        <div className="w-15 h-15 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg mb-4">
                            <UserPlus className="text-white w-10 h-10" />
                        </div>

                        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Create Account
                        </h1>
                    </div>

                    <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
                        <TextField isRequired name="name" type="text">
                            <Label className="font-semibold text-gray-700">
                                Full Name
                            </Label>
                            <Input
                                placeholder="Enter your full name"
                                className="rounded-xl"
                            />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="photo" type="text">
                            <Label className="font-semibold text-gray-700">
                                Profile Photo URL
                            </Label>
                            <Input
                                placeholder="photo URL"
                                className="rounded-xl"
                            />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        value
                                    )
                                ) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="font-semibold text-gray-700">
                                Email Address
                            </Label>
                            <Input
                                placeholder="Enter your email"
                                className="rounded-xl"
                            />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                return null;
                            }}
                        >
                            <Label className="font-semibold text-gray-700">
                                Password
                            </Label>
                            <Input
                                placeholder="Create a strong password"
                                className="rounded-xl"
                            />
                            <Description className="text-gray-500">
                                Minimum 8 characters required
                            </Description>
                            <FieldError />
                        </TextField>

                        <p className="text-sm text-center text-gray-600">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                            >
                                Login Now
                            </Link>
                        </p>

                        <div className="flex flex-col gap-3 pt-2">
                            <Button
                                type="submit"
                                className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-lg hover:scale-[1.02] transition-all"
                            >
                                <Check />
                                Create Account
                            </Button>

                            <Button
                                type="reset"
                                variant="bordered"
                                className="w-full h-12 rounded-xl font-semibold"
                            >
                                Reset Form
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default RegistrarPage;