import "./AdminLogin.scss";

import { fetchDataFromApi, postDataToApi } from "../../utils/api";
import { useContext, useEffect, useRef, useState } from "react";

import { Context } from "../../utils/context";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const [image, setImage] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const emailRef = useRef();
  const passwordRef = useRef();

  const login_data = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const data = await fetchDataFromApi(
      `/api/admins?populate=*&filters[username]=${email}&filters[password]=${password}`
    );
    console.log(data.data[0]);

    if (!data.data[0]) {
      alert("wrong data");
    } else {
      localStorage.setItem("admin_data", JSON.stringify(data.data[0]));
      alert("log success");
      window.location.reload();
    }
  };

  return (
    <div className="account-content rounded-xl">
      <div className="fav-header">
      
      </div>
      <div>
        <section class="bg-red-50 dark:bg-red-900">
          <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-90vh lg:py-4 ">
            <span class="flex items-center mb-8 text-2xl font-semibold text-red-900 dark:text-red-200">
              Room Scout
            </span>

            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-red-600 dark:border-red-800">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-red-900 md:text-2xl dark:text-red-100">
                  Sign in to your admin account
                </h1>

                <form class="space-y-4 md:space-y-6" onSubmit={login_data}>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-red-900 dark:text-red-100">
                      Your Username/ Email
                    </label>
                    <input
                      type="email"
                      ref={emailRef}
                      class="bg-red-50 border border-red-300 text-red-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                      placeholder="abc@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-red-900 dark:text-red-100">
                      Password
                    </label>
                    <input
                      type="password"
                      ref={passwordRef}
                      placeholder="••••••••"
                      class="bg-red-50 border border-red-300 text-red-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminLogin;
