import { useEffect } from "react";
import { useNotificationsStore } from "../store/useNotificationsStore";

export default function Notification() {
    const { notifications, removeNotification } = useNotificationsStore();

    useEffect(() => {
        if (notifications.length > 0) {
            const timers = notifications.map(notification =>
                setTimeout(() => {
                    removeNotification(notification.id);
                }, 3000) 
            );

            return () => timers.forEach(timer => clearTimeout(timer));
        }
    }, [notifications, removeNotification]);

    if (notifications.length === 0) return null;

    return (
        <div className="fixed top-5 right-5 space-y-3 z-50">
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className={`px-4 py-3 rounded-lg shadow-md text-white font-semibold transition-opacity duration-300 ${
                        notification.type === "error" ? "bg-red-500" : "bg-green-500"
                    }`}
                >
                    {notification.message}
                </div>
            ))}
        </div>
    );
}
