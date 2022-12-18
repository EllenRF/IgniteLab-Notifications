import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notification-repositories";
import { SendNotification } from "./send-notification"

describe('Send Notification', () => {
    it('should be able to send a notification', async () =>{
        
        const notificationsRepository = new InMemoryNotificationsRepository()
        const sendNotification = new SendNotification(notificationsRepository);
    
        const { notification} =await sendNotification.execute({
            content: 'this is a notification',
            category: 'social',
            recipientId: 'example-recipientId'
        });

        expect(notificationsRepository.notifications[0]).toEqual(notification);
        expect(notificationsRepository.notifications).toHaveLength(1);
    })
})