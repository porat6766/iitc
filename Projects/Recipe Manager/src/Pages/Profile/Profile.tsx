import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/Components/ui/button";
import { setUser } from "../../store/slices/userSlice.tsx";
import { apiResipe } from "@/api/api.tsx";
import EditProfile from "@/Components/EditProfile.tsx";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiResipe.get("/User/10iugrv3f7834gt87");
        dispatch(setUser(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch, editMode]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Profile Information
      </h1>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">Name:</span>
          <span>{user.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">Age:</span>
          <span>{user.age}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">Email:</span>
          <span>{user.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">Phone:</span>
          <span>{user.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">Address:</span>
          <span>{user.address}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">Occupation:</span>
          <span>{user.occupation}</span>
        </div>
      </div>

      <div className="text-center mt-6">
        <Button
          variant="default"
          className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
          onClick={() => setEditMode(true)}
        >
          Edit Profile
        </Button>
      </div>

      {editMode && (
        <EditProfile
          user={user}
          onSave={() => {
            setEditMode(false);
          }}
          onClose={() => setEditMode(false)}
        />
      )}
    </div>
  );
}

export default Profile;
