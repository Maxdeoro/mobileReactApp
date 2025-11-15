import * as Notification from 'expo-notifications';
import { useEffect } from 'react';

export function Notifications() {
    Notification.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: true,
        shouldSetBadge: true,
        shouldShowAlert: true,
    }),
});

useEffect(() => {
    const receivedSubscr = Notification.addNotificationReceivedListener((notification) => {
        console.log(notification.request.content.data);
    });
    const responseReseivedSubscr = Notification.addNotificationResponseReceivedListener((notification) => {
        console.log('clicked');
        console.log(notification.notification.request.content.data);
    });
    return () => {
        receivedSubscr.remove();
        responseReseivedSubscr.remove();
    };
}, []);

    return <></>;
};