import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useState } from "react";
import { apiResipe } from "@/api/api.js";

function EditProfile({
  user,
  onSave,
  onClose,
}: {
  user: any;
  onSave: (updatedUser: any) => void;
  onClose: () => void;
}) {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [occupation, setOccupation] = useState(user.occupation);

  console.log(user);

  const handleSave = async (id: string) => {
    console.log(id);

    const updatedUser = { name, age, email, phone, address, occupation };
    try {
      const data = await apiResipe.put(`/User/${id}`, updatedUser);
      console.log(data);
      onClose();
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Your Profile</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="block text-gray-700">Age</label>
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Occupation</label>
            <Input
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              console.log("Dialog closed");
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            className="bg-blue-500 text-white"
            onClick={() => handleSave(user.id)}
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditProfile;
