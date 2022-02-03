import { FirebaseError, initializeApp } from 'firebase/app';
import { useLoad } from '../LoaderContext/LoaderContext';
import { useAppDispatch } from '../redux/app/hooks';
import firebaseConfig from './appConfig';
import { child, get, getDatabase, onValue, ref, set, push } from 'firebase/database';
import { WaterInTakeType } from '../../utils/types';

export default class ActivityFirebase {
  app;
  db;
  dispatch;
  dispatchRedux;
  userId;

  constructor(userId?: string) {
    this.app = initializeApp(firebaseConfig);
    this.db = getDatabase(this.app);

    this.dispatchRedux = useAppDispatch();
    this.dispatch = useLoad().dispatch;

    this.userId = userId;
  }

  async createActivity(waterInMiliLiter: number) {
    try {
      this.dispatch({ type: 'loading' });

      const dataToSend = {
        waterInTake: [{ waterInMiliLiter, date: new Date().getTime() }],
      };

      push(ref(this.db, `activityStatus/${this.userId}`), dataToSend);

      this.dispatch({ type: 'loaded' });
      return true;
    } catch (error) {
      if (error instanceof FirebaseError) {
        this.errorFromFirebase(error);
      }
      return false;
    }
  }

  async createWaterInTake(waterInMiliLiter: number) {
    try {
      this.dispatch({ type: 'loading' });

      const dataToSend = { waterInMiliLiter, date: new Date().getTime() };

      push(ref(this.db, `activityStatus/${this.userId}/waterInTake`), dataToSend);

      this.dispatch({ type: 'loaded' });
      return true;
    } catch (error) {
      if (error instanceof FirebaseError) {
        this.errorFromFirebase(error);
      }
      return false;
    }
  }

  /**
   * @getWaterInTake example method to get array waterInTake
   * @returns @userSnapshot
   */
  async getWaterInTake() {
    try {
      this.dispatch({ type: 'loading' });
      const dbRef = ref(this.db);

      const snapshot = await get(child(dbRef, `activityStatus/${this.userId}/waterInTake`));

      if (!snapshot.exists()) {
        throw snapshot;
      }

      const userSnapshot = snapshot.val();

      console.log(userSnapshot);

      // this.dispatchRedux(setUserData(userSnapshot));
      this.dispatch({ type: 'loaded' });

      return userSnapshot;
    } catch (error) {
      if (error instanceof FirebaseError) {
        return this.errorFromFirebase(error);
      }

      console.log(error);
      this.dispatch({ type: 'loaded' });
      return false;
    }
  }

  errorFromFirebase(error: FirebaseError) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorMessage} (${errorCode})`);
    return error;
  }
}
