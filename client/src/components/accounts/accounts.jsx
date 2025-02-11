import "./accounts.scss";

import { fetchDataFromApi, postDataToApi } from "../../utils/api";
import { useContext, useEffect, useRef, useState } from "react";

import { Context } from "../../utils/context";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Accounts = ({ setShowAccount }) => {
  const [image, setImage] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      // Ensure an image is selected
      if (!image || !image[0]) {
        alert("Please upload an image.");
        return;
      }

      // Upload the image first
      const file = new FormData();
      file.append("files", image[0]);

      const uploadResponse = await postDataToApi("/api/upload", file);

      if (!uploadResponse || uploadResponse.length === 0) {
        alert("Image upload failed.");
        return;
      }

      const fileId = uploadResponse[0].id;

      // Create the owner record
      const ownerResponse = await postDataToApi("/api/owners", {
        data: { ...data, img: fileId },
      });

      if (ownerResponse) {
        alert("User added successfully!");
        checksignup(false);
        checklogin(true);
        navigate("/");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  const Navigate = useNavigate();

  const { user, checkuser } = useContext(Context);
  const { login, checklogin } = useContext(Context);
  const { signup, checksignup } = useContext(Context);
  const { user_data, set_user_data } = useContext(Context);

  const emailRef = useRef();
  const passwordRef = useRef();

  const login_data = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const data = await fetchDataFromApi(
      `/api/owners?populate=*&filters[username]=${email}&filters[password]=${password}`
    );
    console.log(data.data[0]);

    if (!data.data[0]) {
      alert("wrong data");
    } else {
      checkuser(true);
      checklogin(false);
      checksignup(false);
      set_user_data(data.data[0]);
      localStorage.setItem("user_data", JSON.stringify(data.data[0]));
      alert("log success");
    }
  };

  return (
    <div className="fav-panel">
      <div className="opac-layer"></div>
      <div className="account-content rounded-xl">
        <div className="fav-header">
          <span className="heading" style={{ color: "#B22222" }}>
            Accounts
          </span>
          <span className="close-btn">
            <span
              className="text"
              onClick={() => setShowAccount(false)}
              style={{ color: "#B22222" }}
            >
              close
            </span>
          </span>
        </div>

        {user && (
          <div class="card">
            <h1 style={{ color: "#B22222" }}>{user_data.name}</h1>
            <p class="title"></p>

            <p>
              <button
                style={{ backgroundColor: "#B22222", color: "white" }}
                onClick={() => {
                  checkuser(false);
                  checklogin(true);
                  setShowAccount(false);
                  checksignup(false);
                  set_user_data("");
                  localStorage.removeItem("user_data");

                  navigate("/");
                }}
              >
                Logout
              </button>
            </p>
          </div>
        )}

        {login && (
          <div>
            <section class="bg-red-50 dark:bg-red-900">
              <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-90vh lg:py-4 ">
                <span class="flex items-center mb-8 text-2xl font-semibold text-red-900 dark:text-red-200">
                  Room Scout
                </span>

                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-red-600 dark:border-red-800">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-red-900 md:text-2xl dark:text-red-100">
                      Sign in to your account
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
                    <p class="text-sm font-light text-red-500 dark:text-red-400">
                      Don't have an account yet?{" "}
                      <div
                        onClick={() => {
                          checklogin(false);
                          checksignup(true);
                        }}
                        class="font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        Sign up
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {signup && (
          <section class="bg-red-50 dark:bg-red-900">
            <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-90vh lg:py-4 ">
              <span class="flex items-center mb-8 text-2xl font-semibold text-red-900 dark:text-red-200">
                Room Scout
              </span>

              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-red-600 dark:border-red-800">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-red-900 md:text-2xl dark:text-red-100">
                    Sign Up for free
                  </h1>
                  <form
                    class="space-y-4 md:space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div>
                      <label
                        for="username"
                        class="block mb-2 text-sm font-medium text-red-900 dark:text-red-100"
                      >
                        Your Username/email
                      </label>
                      <input
                        type="email"
                        id="username"
                        required="required"
                        {...register("username", { required: true })}
                        class="bg-red-50 border border-red-300 text-red-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                        placeholder="abc@gmail.com"
                      />
                    </div>

                    <div>
                      <label
                        for="img"
                        class="block mb-2 text-sm font-medium text-red-900 dark:text-red-100"
                      >
                        Your Image
                      </label>
                      <input
                        accept="image/*"
                        type="file"
                        id="img"
                        required="required"
                        {...register("img", { required: true })}
                        onChange={(e) => setImage(e.target.files)}
                        class="bg-red-50 border border-red-300 text-red-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-red-900 dark:text-red-100"
                      >
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        id="username"
                        required="required"
                        {...register("name", { required: true })}
                        class="bg-red-50 border border-red-300 text-red-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                        placeholder="Hari Das"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-red-900 dark:text-red-100"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        required="required"
                        {...register("password", {
                          required: "Password is required",
                          pattern: {
                            value: /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                            message:
                              "Password must be at least 8 characters long, include one uppercase letter and one special character.",
                          },
                        })}
                        className="bg-red-50 border border-red-300 text-red-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                        placeholder="**********"
                      />
                      {errors.password && (
                        <p className="mt-1 text-sm" style={{ color: "white" }}>
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <div class="inputbox">
                      <input
                        class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 "
                        type="submit"
                        value="submit"
                      />
                    </div>
                  </form>
                  <p class="text-sm font-light text-red-500 dark:text-red-400">
                    Already have an account?{" "}
                    <div
                      onClick={() => {
                        checklogin(true);
                        checksignup(false);
                      }}
                      class="font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      SignIn
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Accounts;
