import { useContext, useState, createContext } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  driver_license: string;
  avata: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
}
