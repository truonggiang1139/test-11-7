import { notifications as mantineNotifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';

export const notifications = {
  success(message: string) {
    mantineNotifications.show({
      color: 'green',
      message,
      icon: <IconCheck size={32} />,
      withCloseButton: true,
      autoClose: 5000,
    });
  },

  error(message: string) {
    mantineNotifications.show({
      color: 'red',
      message,
      icon: <IconX size={32} />,
      withCloseButton: true,
      autoClose: 5000,
    });
  },
};
