import { useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const EditProfileModal = () => {
    const [fullName, setFullName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const { editProfile, user } = UseAuth();
    const navigate = useNavigate();

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editProfile(fullName, photoURL)

        const userData = {
            fullName,
            photoURL,
        };
        console.log(userData);

        fetch(
            `${import.meta.env.VITE_API_URL}/user/${user?.email}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('update success');
                    navigate('/dashboard/profile')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('update failed');
            });

        // .then(() => {

        // });
    }

    return (
        <div>
            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn bg-green-600 text-white w-full">Edit Profile</button>
            <dialog id="my_modal_2" className="modal">
                <form onSubmit={handleEditSubmit} className="modal-box flex flex-col gap-4">
                    <input onChange={(e) => setFullName(e.target.value)} className="border-2" type="text" placeholder="Your Full Name" />
                    <input onChange={(e) => setPhotoURL(e.target.value)} className="border-2" type="text" placeholder="Your Image URL" />
                    <button className="btn bg-green-400">Save changes</button>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default EditProfileModal;