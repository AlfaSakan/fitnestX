import { instanceOfErrorDuplicateEmail } from './errorType';
import Toast from 'react-native-toast-message';

export const toastError = (error: any) => {
  console.log(error);

  if (instanceOfErrorDuplicateEmail(error)) {
    console.log(error.result.code);
    Toast.show({
      type: 'error',
      text1: `Error Status (${error.status})`,
      text2: `Duplicate Email (${error.result.code})`,
    });
  }
};
