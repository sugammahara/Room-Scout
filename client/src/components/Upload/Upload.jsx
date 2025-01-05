import "./Upload.scss";

import React, { useContext } from "react";

import { Context } from "../../utils/context";
import { MdClose } from "react-icons/md";
import { postDataToApi } from "../../utils/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Upload = ({ setShowUpload, setShowAccount }) => {
  const [image, setImage] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user, user_data } = useContext(Context);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (!image || image.length === 0) {
      alert("Please select an image.");
      return;
    }

    const file = new FormData();
    file.append("files", image[0]);

    // Upload the file
    postDataToApi("/api/upload", file)
      .then((uploadRes) => {
        if (uploadRes && Array.isArray(uploadRes) && uploadRes[0]?.id) {
          const fileId = uploadRes[0].id;

          // Submit the rest of the form data
          const requestData = {
            ...data,
            img: fileId, // Include the uploaded file ID
          };

          postDataToApi("/api/alls", { data: requestData })
            .then(() => {
              alert("Upload successful!");
              setShowUpload(false);
              navigate("/");
            })
            .catch((err) => {
              console.error("Error saving data:", err);
              alert("Error saving data.");
            });
        } else {
          alert("File upload failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error uploading file:", err);
        alert("Error uploading file.");
      });
  };

  const nologin = () => {
    alert("login first");
    navigate("/");
    setShowAccount(true);
    setShowUpload(false);
  };

  return !user ? (
    nologin()
  ) : (
    <>
      <div className="search-modal">
        <div className="form-field">
          <MdClose className="close-btn" onClick={() => setShowUpload(false)} />
        </div>
        <div className="body">
          <div className="search-result-content">
            <div class="center">
              <h1>Upload</h1>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-sm "
                onSubmit={handleSubmit(onSubmit)}
              >
                <div class="inputbox mb-4">
                  <input
                    type="text"
                    required="required"
                    {...register("title", { required: true })}
                  />
                  <span>Title</span>
                </div>
                <div class=" inputbox">
                  <input
                    type="file"
                    placeholder="image"
                    required="required"
                    accept="image/*"
                    {...register("img", { required: true })}
                    onChange={(e) => setImage(e.target.files)}
                  />
                </div>
                <div class="inputbox">
                  <input
                    type="number"
                    required="required"
                    {...register("contact", { required: true })}
                  />
                  <span>Contact</span>
                </div>

                <div class="inputbox">
                  <input
                    type="number"
                    required="required"
                    {...register("price", { required: true })}
                  />
                  <span>Price</span>
                </div>
                <div class="inputbox">
                  <input
                    type="text"
                    required="required"
                    {...register("desc", { required: true })}
                  />
                  <span>Description</span>
                </div>
                <div class="w-full inputbox" style={{ marginBottom: "64px" }}>
                  <p>Type</p>
                  <select
                    required="required"
                    {...register("type", { required: true })}
                    style={{
                      width: "100%",
                      padding: "8px 16px",
                      border: "2px solid black",
                      borderRadius: "8px",
                    }}
                  >
                    <option value="rooms">Room</option>
                    <option value="flats">Flat</option>
                  </select>
                </div>
                <div class="inputbox">
                  <input
                    type="text"
                    required="required"
                    {...register("location", { required: true })}
                  />
                  <span>Location</span>
                </div>
                <div class="inputbox">
                  <input
                    type="text"
                    value={user_data.data[0].attributes.username}
                    required="required"
                    {...register("username", { required: true })}
                  />
                  <span>Username</span>
                </div>

                <div class="inputbox">
                  <input type="submit" value="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;