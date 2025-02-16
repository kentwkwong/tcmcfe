// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import jwtDecode from "jwt-decode";

// interface AuthContextType {
//   accessToken: string | null;
//   login: (
//     email: string,
//     password: string,
//     rememberMe: boolean
//   ) => Promise<boolean>;
//   logout: () => void;
// }

// export const AuthContext = createContext<AuthContextType | undefined>(
//   undefined
// );

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [accessToken, setAccessToken] = useState<string | null>(
//     localStorage.getItem("accessToken") ||
//       sessionStorage.getItem("accessToken") ||
//       null
//   );

//   useEffect(() => {
//     const refreshToken = localStorage.getItem("refreshToken");
//     if (refreshToken) {
//       axios
//         .post("http://localhost:5000/refresh", { refresh_token: refreshToken })
//         .then((response) => {
//           setAccessToken(response.data.access_token);
//           sessionStorage.setItem("accessToken", response.data.access_token);
//         })
//         .catch(() => logout());
//     }
//   }, []);

//   const login = async (
//     email: string,
//     password: string,
//     rememberMe: boolean
//   ) => {
//     try {
//       const response = await axios.post("http://localhost:5000/login", {
//         email,
//         password,
//         remember_me: rememberMe,
//       });
//       const { access_token, refresh_token } = response.data;

//       setAccessToken(access_token);
//       sessionStorage.setItem("accessToken", access_token);

//       if (rememberMe && refresh_token) {
//         localStorage.setItem("refreshToken", refresh_token);
//       }

//       return true;
//     } catch (error) {
//       console.error("Login failed:", error);
//       return false;
//     }
//   };

//   const logout = () => {
//     setAccessToken(null);
//     sessionStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//   };

//   return (
//     <AuthContext.Provider value={{ accessToken, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
