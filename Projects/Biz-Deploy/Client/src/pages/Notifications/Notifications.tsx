import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../../App.tsx";

const NotificationsPage = ({ setIsLogIn }: any) => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const funCheck = async () => {
      const check = await checkAuth(setIsLogIn);
      console.log(check);

      if (!check) {
        navigate("/login");
      }
    };
    funCheck();
  }, []);

  useEffect(() => {
    const fakeNotifications = [
      {
        id: 1,
        title: "Business Update",
        message: "The business 'Chef Restaurant' was recently updated.",
      },
      {
        id: 2,
        title: "Business Deleted",
        message: "The business 'Flower Shop' was deleted.",
      },
      {
        id: 3,
        title: "New Subscription",
        message: "A new user has registered for your business 'Yoga Studio'.",
      },
    ];

    setNotifications(fakeNotifications as any);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification: any) => (
          <div
            key={notification.id!}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <p className="font-bold">{notification.title}</p>
            <p>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
