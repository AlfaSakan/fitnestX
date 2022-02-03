import AsyncStorage from '@react-native-async-storage/async-storage';
import { FirebaseError, initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { child, get, getDatabase, onValue, ref, set } from 'firebase/database';

import firebaseConfig from './appConfig';

import { UserFirebaseType, UserType } from '../../utils/types/userType';

import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import {
  setEmail,
  setFirstName,
  setGoal,
  setLastName,
  setUserData,
} from '../redux/features/user/userInformation';
import { setLoading } from '../redux/features/general/general';
import { useLoad } from '../LoaderContext/LoaderContext';
import { setLoginDispatch } from '../redux/features/login';

export default class UserFirebase {
  app;
  auth;
  db;
  dispatch;
  dispatchRedux;
  userReducer;
  loginReducer;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.db = getDatabase(this.app);
    this.dispatch = useLoad().dispatch;
    this.dispatchRedux = useAppDispatch();

    this.userReducer = useAppSelector((state) => state).user;
    this.loginReducer = useAppSelector((state) => state).login;
  }

  async signUpUser(email: string, password: string) {
    try {
      this.dispatch({ type: 'loading' });
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user: User = userCredential.user;

      this.createAsyncStorageUser(user);
      this.dispatchLoginData(user);

      this.dispatchRedux(setEmail(email));
      this.dispatch({ type: 'loaded' });

      return user;
    } catch (error) {
      if (error instanceof FirebaseError) {
        return this.errorFromFirebase(error);
      }

      this.dispatch({ type: 'loaded' });
      console.log(error);
      return false;
    }
  }

  async signInUser(email: string, password: string) {
    try {
      this.dispatch({ type: 'loading' });
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      this.createAsyncStorageUser(user);
      this.dispatchLoginData(user);

      this.dispatch({ type: 'loaded' });

      await this.getDatabase(user.uid);

      return true;
    } catch (error) {
      if (error instanceof FirebaseError) {
        return this.errorFromFirebase(error);
      }

      this.dispatch({ type: 'loaded' });
      console.log(error);
      return false;
    }
  }

  async setNameUser(firstName: string, lastName: string, userId: string) {
    try {
      this.dispatch({ type: 'loading' });
      set(ref(this.db, `user/${userId}`), {
        firstName,
        lastName,
      });
      this.dispatch({ type: 'loaded' });
      this.dispatchRedux(setFirstName(firstName));
      this.dispatchRedux(setLastName(lastName));

      return true;
    } catch (error) {
      if (error instanceof FirebaseError) {
        return this.errorFromFirebase(error);
      }

      this.dispatch({ type: 'loaded' });
      console.log(error);
      return false;
    }
  }

  async setDatabase(goal: string, userId: string) {
    try {
      this.dispatch({ type: 'loading' });

      const dataToSend = {
        dateOfBirth: this.userReducer.dateOfBirth,
        email: this.userReducer.email || this.loginReducer.email,
        height: this.userReducer.height,
        weight: this.userReducer.weight,
        gender: this.userReducer.gender,
        goal,
        firstName: this.userReducer.firstName,
        lastName: this.userReducer.lastName,
      };

      set(ref(this.db, `user/${userId}`), dataToSend);

      this.dispatchRedux(setGoal(goal));
      this.dispatch({ type: 'loaded' });

      return true;
    } catch (error) {
      if (error instanceof FirebaseError) {
        return this.errorFromFirebase(error);
      }

      console.log(error);
      this.dispatch({ type: 'loaded' });
      return false;
    }
  }

  async getDatabase(userId: string) {
    try {
      this.dispatch({ type: 'loading' });
      const dbRef = ref(this.db);

      const snapshot = await get(child(dbRef, `user/${userId}`));

      if (!snapshot.exists()) {
        throw snapshot;
      }

      const userSnapshot = snapshot.val() as UserType;

      this.dispatchRedux(setUserData(userSnapshot));
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

  updateDatabase() {}

  deleteDatabase() {}

  dispatchLoginData(user: User) {
    this.dispatchRedux(
      setLoginDispatch({
        uid: user.uid,
        emailVerified: user.emailVerified,
        refreshToken: user.refreshToken,
        email: user.email,
      })
    );
  }

  async createAsyncStorageUser(user: User) {
    const jsonValue = {
      emailVerified: user.emailVerified,
      uid: user.uid,
      refreshToken: user.refreshToken,
      email: user.email,
    };

    await AsyncStorage.setItem('user', JSON.stringify(jsonValue));
  }

  errorFromFirebase(error: FirebaseError) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorMessage} (${errorCode})`);
    return error;
  }
}
