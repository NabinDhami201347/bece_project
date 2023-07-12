import React, { createContext, useEffect, useState, useContext, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  handleLogout: () => Promise<void>;
  setToken: (token: string) => Promise<void>;
  getToken: () => Promise<string | null>;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  isLoading: true,
  handleLogout: async () => {},
  setToken: async () => {},
  getToken: async () => null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkToken();
  }, [isAuthenticated]);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      setIsLoading(false);
      console.log("checked token: " + token);
    }
  };

  const setToken = async (token: string) => {
    await AsyncStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    return token;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        handleLogout,
        setToken,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextProps => useContext(AuthContext);
