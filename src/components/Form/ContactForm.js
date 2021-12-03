import React, { useState } from "react"
import "./ContactForm.css"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

export default function ContactForm({ api }) {
  const formData = {
    name: "",
    email: "",
    message: "",
  }

  const [form, setForm] = useState(formData)

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault(e)
    const customId = "custom-id-yes"
    const id = toast.loading("Please wait...", {
      position: "top-center",
      autoClose: true,
      toastId: customId,
    })
    try {
      if (!form.name || !form.email || !form.message)
        return toast.update(id, {
          render: "Please fill in all fields",
          type: "error",
          isLoading: false,
          position: "top-center",
          autoClose: true,
          toastId: customId,
        })
      if (form.name.length < 3)
        return toast.update(id, {
          render: "The name must be at least 3 characters!",
          type: "error",
          isLoading: false,
          position: "top-center",
          autoClose: true,
          toastId: customId,
        })
      if (form.message.length < 5)
        return toast.update(id, {
          render: "The message must be at least 5 characters!",
          type: "error",
          isLoading: false,
          position: "top-center",
          autoClose: true,
          toastId: customId,
        })
      const response = await axios.post(`${api}/misc/contact-us`, form)
      if (response.data.success === true) {
        toast.update(id, {
          render: "Message sent successfully",
          type: "success",
          isLoading: false,
          position: "top-center",
          autoClose: true,
          toastId: customId,
        })
        setForm({ name: "", email: "", message: "" })
      }
    } catch (error) {
      if (error.response.status === 500) {
        return toast.update(id, {
          render: "Internal Server Error",
          type: "error",
          position: "top-center",
          isLoading: false,
          autoClose: true,
          toastId: customId,
        })
      } else if (error.response) {
        toast.update(id, {
          render: error.response.data.error.message,
          type: "error",
          position: "top-center",
          isLoading: false,
          autoClose: true,
          toastId: customId,
        })
      } else if (error.request) {
        toast.update(id, {
          render: "You are offline",
          type: "error",
          isLoading: false,
          position: "top-center",
          autoClose: true,
          toastId: customId,
        })
      } else {
        toast.update(id, {
          render: "You are offline",
          type: "error",
          isLoading: false,
          position: "top-center",
          autoClose: true,
          toastId: customId,
        })
      }
    }
  }

  return (
    <>
      <div className="bg-white">
        <div class="flex bg-white items-center justify-center">
          <div class="grid bg-white rounded-lg w-11/12 md:w-full lg:w-full sm:mx-6 sm:ml-20">
            <form onSubmit={handleSubmit}>
              <div class="grid grid-cols-1 gap-5 sm:gap-y-8 mx-2">
                <div class="grid grid-cols-1">
                  <label
                    className="sm:text-2xl text-md font-Gilroy font-semibold text-gray-500"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="input-field appearance-none my-1 rounded py-3 px-3 text-md focus:outline-none focus:border-transparent"
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={form.name}
                  />
                </div>
                <div class="grid grid-cols-1">
                  <label
                    className="sm:text-2xl text-md font-Gilroy font-semibold text-gray-500"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="input-field appearance-none my-1 rounded py-3 px-3 text-md focus:outline-none focus:border-transparent"
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={form.email}
                  />
                </div>
                <div class="grid grid-cols-1">
                  <label
                    className="sm:text-2xl text-md font-Gilroy font-semibold text-gray-500"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="input-field appearance-none my-1 h-56 rounded py-3 px-3 text-md focus:outline-none focus:border-transparent"
                    id="message"
                    name="message"
                    type="text"
                    onChange={handleChange}
                    value={form.message}
                  ></textarea>
                </div>
              </div>
              <div className="text-center mt-5 sm:mt-10">
                <button
                  className="bg-black w-auto font-Gilroy text-white px-5 sm:px-9 sm:py-4 py-3 rounded-md font-semibold border-none active:bg-gray-600"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
