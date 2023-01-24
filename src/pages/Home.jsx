import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const url = "https://apidev.kanvas.dev/v2/users";
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem("token");
    navigate("/login");
  }

  const getUsers = async (event) => {
    const token = localStorage.getItem("token");

    const sendUser = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    const response = await sendUser.json();

    setUsers(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="h-screen w-screen">
      <nav className="bg-blue-500 h-15 flex justify-end p-3">
        <button
          className="text-white p-2 border rounded-lg mr-5"
          onClick={logout}
        >
          logout
        </button>
      </nav>

      <div className="flex items-center justify-center min-h-screen">
        <div className="rounded-xl border p-5 shadow-md w-6/8 bg-white">
          <div>
            {users.map((user) => (
              <div key={user.id}>
                <ul>
                  <li>
                    <strong>Id: </strong>
                    {user.id}
                  </li>
                  <li>
                    <strong>First Name: </strong>
                    {user.firstname}
                  </li>
                  <li>
                    <strong>Last Name: </strong>
                    {user.lastname}
                  </li>
                  <li>
                    <strong>E-mail: </strong>
                    {user.email}
                  </li>
                  <li>
                    <strong>Company: </strong>
                    {user.default_company}
                  </li>
                  <li>
                    <strong>Create At: </strong>
                    {user.registered}
                  </li>
                  <li>
                    <strong>Updated At: </strong>
                    {user.updated_at}
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold"></div>
            <div className="text-sm text-neutral-600"></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
