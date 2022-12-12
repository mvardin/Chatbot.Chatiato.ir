import axios from "axios";
import swal from "sweetalert2";
import { BASEURL } from "./constants";

const client = axios.create({
  baseURL: BASEURL,
});
// Add a response interceptor
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    // if (error.response.status.toString().startsWith("40")) {
    //   if (error.response.status === 403) {
    //     swal({
    //       icon: "error",
    //       title: "خطا",
    //       text: error.response.data.data || "حساب کاربری شما اجازه دسترسی به این بخش را ندارد",
    //       button: "متوجه شدم",
    //     });
    //   } else if (error.response.status === 410) {
    //     swal({
    //       icon: "error",
    //       title: "خطا",
    //       text: error.response.data.data || "مدت زمان اعتبار انجام این عملیات به اتمام رسیده است",
    //       button: "متوجه شدم",
    //     });
    //   } else if (error.response.status === 404) {
    //     swal({
    //       icon: "error",
    //       title: "خطا",
    //       text: error.response.data.data || "آدرس یا مقادیر درخواستی شما وجود ندارد",
    //       button: "متوجه شدم",
    //     });
    //   } else if (error.response.status === 404) {
    //     swal({
    //       icon: "error",
    //       title: "خطا",
    //       text: error.response.data.data || "آدرس یا مقادیر درخواستی شما وجود ندارد",
    //       button: "متوجه شدم",
    //     });
    //   } else if (error.response.status === 406) {
    //     swal({
    //       icon: "error",
    //       title: "خطا",
    //       text: error.response.data.data || "درخواست شما مورد قبول نیست",
    //       button: "متوجه شدم",
    //     });
    //   } else if (error.response.status === 401) {
    //     swal({
    //       icon: "error",
    //       title: "خطا",
    //       text: "توکن احراز هویت شما منقضی شده است.\nلطفا دوباره وارد شوید.",
    //       button: "متوجه شدم",
    //     });
    //     let allCookies = cookies.getAll();
    //     console.log(allCookies);
    //     Object.keys(allCookies).forEach((cookie) => {
    //       cookies.remove(cookie, {
    //         path: "/",
    //       });
    //     })
    //     setTimeout(() => {
    //       window.location.href = "/";
    //     }, 3000);
    //   } else {
    //     swal({
    //       icon: "error",
    //       title: "خطا",
    //       text: error.response.data.data || "خطا در برقراری ارتباط با سرور",
    //       button: "متوجه شدم",
    //     });
    //   }
    // } else {
    //   swal({
    //     icon: "error",
    //     title: "خطا",
    //     text: error.response.data.data || "خطا در برقراری ارتباط با سرور",
    //     button: "متوجه شدم",
    //   });
    // }
    return Promise.reject(error);
  }
);
export default client;
