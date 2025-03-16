import { create } from "zustand";

export const useNotificationsStore = create((set) => ({
    notifications: [],  

    addNotification: (notification) => set((state) => ({
        notifications: [...state.notifications, notification]
    })),

    removeNotification: (id) => set((state) => ({
        notifications: state.notifications.filter(notification => notification.id !== id)
    })),

    clearNotifications: () => set(() => ({
        notifications: []
    }))
}));
