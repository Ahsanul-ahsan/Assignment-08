"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegistrarPage = () => {

    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name: name, 
            email: email, 
            password: password, 
            image: photo,
            callbackURL: "/",
        });


        if(data){
            router.push("/")

        }
        else if(
            alert("error")
        )


        console.log(data, error)
    }

    return (
        <div className="flex  justify-center items-center h-screen">
            <Form className="flex w-96 flex-col gap-4 border p-5 shadow rounded-2xl" onSubmit={onSubmit}>
                <h1 className="font-bold text-2xl text-center">Register Now</h1>
                <TextField isRequired name="name" type="text">
                    <Label className="font-bold">Name</Label>
                    <Input placeholder="Your Name" />
                    <FieldError />
                </TextField>
                <TextField isRequired name="photo" type="text">
                    <Label className="font-bold">Url</Label>
                    <Input placeholder="Your Photo Url" />
                    <FieldError />
                </TextField>
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

                         <Link href={"/login"} className="font-bold underline">Login Now</Link>
                    </Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default RegistrarPage;