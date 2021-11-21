import { DataResponse } from "./backend";

export interface GetProfileResponse extends DataResponse {
  data: {
    full_name: string;
    display_picture: string;
  };
}

export const getProfile = async (token: string) => {
  var axios = require("axios");

  var config = {
    method: "get",
    url: "https://peduli-banjir.api-techstack.com/user/profile",
    headers: {
      Authorization: "JWT " + token,
    },
  };

  const res: { data: GetProfileResponse } = await axios(config);
  return res.data;
};
