import { createContext, useState } from "react";
import { DataResponse } from "./backend";

interface LoginResponse extends DataResponse {
  data: {
    user: {
      id: number;
      full_name: string;
      display_picture: string;
    };
    token: string;
  };
}

export interface AuthData {
  userId: number;
  name: string;
  displayPicture: string;
  token: string;
}

interface IAuthContext {
  auth: AuthData | undefined;
  login: (googleToken: string, callback: (error: any) => void) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  auth: undefined,
  login: () => {},
  logout: () => {},
});
const { Provider } = AuthContext;

const AuthProvider: React.FC<{}> = (props) => {
  const [authState, setAuthState] = useState<AuthData>();
  const setAuthInfo = (googleToken: string, callback: (error: any) => void) => {
    var axios = require("axios");
    var data = JSON.stringify({
      access_token: googleToken,
    });

    var config = {
      method: "post",
      url: "https://peduli-banjir.api-techstack.com/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response: { data: LoginResponse }) => {
        let responseData = response.data;
        if (!responseData.error) {
          console.log(responseData);
          setAuthState({
            userId: responseData.data.user.id,
            name: responseData.data.user.full_name,
            token: responseData.data.token,
            displayPicture: responseData.data.user.display_picture,
          });
          callback(undefined);
        } else {
          callback(responseData.error);
        }
      })
      .catch((error: any) => {
        callback(error);
      });
  };

  return (
    <Provider
      value={{
        auth: authState,
        login: (googleToken: string, callback: (error: any) => void) =>
          setAuthInfo(googleToken, callback),
        logout: () => {
          setAuthState(undefined);
        },
      }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
