import axiosInstance from "./Axios";

export class LoginApi {
  static Signup = async (data) => {
    try {
      const res = await axiosInstance({
        method: "post",
        url: "/expert/register",
        data: data,
      });
      return {
        data: res.data,
        status: res.status,
      };
    } catch (err) {
      return {
        data: err?.response?.data,
        error: "Something went wrong data!",
      };
    }
  };
}
