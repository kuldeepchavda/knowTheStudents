"use client";
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const authenticatedToken = `Bearer ${token}`;
  const [isLoggedIn,setIsLoggedIn] = useState(!!token);
  // const [isAdmin,setIsAdmin] = useState(user.isAdmin)
  // console.log("from token ath jsx",token);

  function logoutUser() {
    setToken("");
    localStorage.removeItem("token");
  }
  const userAuthentication = async() => {
    try {
      const response = await fetch(
        `http://localhost:8080/authorizations/user`,
        {
          method: "GET",
          headers: {
            Authorization: authenticatedToken,
          },
        }
      );
      if (response.ok) {
        const resResult =await response.json();
        // console.log(resResult);
        setUser(resResult.userData);
      }
    } catch (err) {
      console.log("error while catching userData", err);
      // res.status(500).json({ error: err.message });
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]);
  // all users data
  const [users, setUsers] = useState([]);

    const getAllUsersData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/admin/users`, {
          method: "GET",
          headers: {
            Authorization: authenticatedToken,
          },
        });
        const resData = await response.json();
        if (response.ok) {
          setUsers(resData.data);
        }
      } catch (error) {
        console.log("error occured");
        console.log(error);
      }
    };
    useEffect(() => {
      getAllUsersData();
    }, []);
// grt all the users contacts
  const [contacts, setContacts] = useState([]);

  const getAllTheUsersData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authenticatedToken,
        },
      });
      const resData = await response.json();
      if (response.ok) {
        setContacts(resData.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTheUsersData();
  }, [contacts]);

  return (
    <AuthContext.Provider
      value={{
        authenticatedToken,
        isLoggedIn,
        getAllTheUsersData,
        logoutUser,
        userAuthentication,
        user,
        setUser, 
        contacts,
        setIsLoggedIn,
        users,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    console.log("error");
    // throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
