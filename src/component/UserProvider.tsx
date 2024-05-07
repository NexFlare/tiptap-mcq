import React, { useState } from "react";

export interface UserContextType {
  userType: UserType;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
}

export const UserContext = React.createContext<UserContextType>({
  userType: "EDITOR",
  setUserType: () => {},
});

type UserType = "EDITOR" | "VIEWER";

const UserProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [userType, setUserType] = useState<UserType>("EDITOR");
  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
