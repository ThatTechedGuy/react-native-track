import axios from "axios";
import { AsyncStorage } from "react-native";
import { isBackgroundLocationAvailableAsync } from "expo-location";

const instance = axios.create({
  baseURL: "http://192.168.1.26:5000",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

export default instance;

