"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            callbackURL: "/",
        });
        console.log(data, error)
        if(data){
            toast.success("loging successfully")
        }
        else if(error){
            toast.warning("worng data")
        }


    }

    const handelGoogle = async() => {

        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data)
        
    }



    return (
        <div className="flex  justify-center items-center h-screen">
            <Form className="flex w-96 flex-col gap-4 border p-5 shadow rounded-2xl" onSubmit={onSubmit}>
                <h1 className="font-bold text-2xl text-center">Login Now</h1>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label className="font-bold">Email</Label>
                    <Input placeholder="Your Email" />
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
                    <Label className="font-bold">Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters <br />
                        <Link href={"/registrar"} className="font-bold underline">Registar</Link>
                    </Description>
                    <FieldError />
                </TextField>
                <div className="flex flex-col gap-2">
                    <Button type="submit" className={"w-full"}>
                        <Check />
                        Submit
                    </Button>
                    <Button onClick={handelGoogle} variant="outline" className={"w-full"}>
                        <FcGoogle /> Google
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default LoginPage;