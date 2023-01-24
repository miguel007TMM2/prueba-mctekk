import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SignUp(props) {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const url = "https://apidev.kanvas.dev/v2/users";

  const sendData = async (event) => {
    event.preventDefault();

    const userData = JSON.stringify({
        verify_password: data.confirmPassword?.trim(),
        default_company: data.company?.trim(),
      firstname: data.firstName?.trim(),
      password: data.password?.trim(),
      lastname: data.lastName?.trim(),
      email: data.email?.trim(),
    });

    const sendUser = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
    });

    const givenResult = await sendUser.json();

    givenResult?.errors?.message
      ? alert(givenResult?.errors.message)
      : navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Mctekk</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              First Name
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              name="firstName"
            />

            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Last Name
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              name="lastName"
            />

            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              name="email"
            />

            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Company
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              name="company"
            />

            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              onChange={handleInputChange}
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              name="password"
            />

            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Confirm Password
            </label>
            <input
              onChange={handleInputChange}
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              name="confirmPassword"
            />

            <button
              type="button"
              onClick={sendData}
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Signup</span>
            </button>
          </div>

          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button
                  onClick={() => navigate("/login")}
                  className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                >
                  <span>
                    <p>I have an account</p>
                  </span>
                  <span className="inline-block ml-1">Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
