import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Device from 'expo-device';
import expoTokensService from '../services/ExpoTokensService';

export const registerForPushNotificationsAsync = async () => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();
  const { modelName, osName, osVersion } = Device;

  expoTokensService.post({
    token,
    modelName,
    osName,
    osVersion
  });
};

export default registerForPushNotificationsAsync;
