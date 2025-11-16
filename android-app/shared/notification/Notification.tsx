import * as Notification from 'expo-notifications';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export function Notifications() {

    const router = useRouter();

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
        const alias = notification.notification.request.content.data.alias;
        router.push(`/(app)/course/${alias}`);
    });
    return () => {
        receivedSubscr.remove();
        responseReseivedSubscr.remove();
    };
}, []);

    return <></>;
};