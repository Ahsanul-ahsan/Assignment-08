"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (data) {
            toast.success("Login successful!");
        } else if (error) {
            toast.error("Invalid email or password");
        }
    };
    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="min-h-screen mt-5 bg-gradient-to-br from-blue-50 via-white to-purple-100 flex items-center justify-center px-2">
            <div className="w-full max-w-md">
                <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white">
                    <div className="text-center mb-8">
                        <div className="w-15 h-15 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg">
                            <FiLogIn />
                        </div>

                        <h1 className="text-2xl font-extrabold text-gray-800">
                            Login to Your Account
                        </h1>
                    </div>

                    <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
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
                                placeholder="Enter your password"
                                className="rounded-xl"
                            />
                            <Description className="text-sm text-gray-500">
                                Minimum 8 characters
                            </Description>
                            <FieldError />
                        </TextField>

                        <div className="text-right w-full">
                            <Link
                                href="/registrar"
                                className="text-sm text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                            >
                                Create new Registar
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:scale-[1.02] transition-all"
                        >
                            <Check className="mr-2" />
                            Login
                        </Button>

                        <div className="relative my-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <Button
                            type="button"
                            onClick={handleGoogle}
                            variant="bordered"
                            className="w-full h-12 rounded-xl border-2 hover:bg-gray-50 transition-all font-semibold"
                        >
                            <FcGoogle className="text-2xl mr-2" />
                            Sign in with Google
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;