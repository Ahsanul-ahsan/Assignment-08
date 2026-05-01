"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

export function ModalPage() {

    const onSubmithandel = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        const { data, error } = await authClient.updateUser({
            image: photo,
            name: name,


        })
        console.log(data, error)
        if (error) {
            toast.warning(`${error.status} `);
        }
        else if (data) {
            toast.success("Update Profile")
        }
    }

    return (
        <Modal>
            <Button variant="primary">Edit Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <FaUser></FaUser>
                            <Modal.Heading>Update Profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmithandel} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="photo" type="text">
                                        <Label>Photo URL</Label>
                                        <Input placeholder="Enter your Photo URL" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit">Update Profile</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}