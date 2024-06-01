import { useState } from "react";
import { Link } from "react-router-dom";
import { hospitalData } from "../data/hospitalData";

export const ViewPage = () => {
  const [color, setColor] = useState("blue");
  return (
    <>
      <div>
        <div className="p-6">
          <img
            src="src/images/Logo Main-07.png"
            alt="logo"
            className="w-[128px]"
          />
          <h1 className="text-4xl mt-4">
            Locate Bed Space Fast with{" "}
            <span className="text-red">Code-Red</span>
          </h1>

          <div>
            <input
              type="text"
              name="search"
              id="search"
              className=" relative bg-grey/25 border-none focus:border-grey focus:ring-2 focus:ring-grey rounded-md mt-4 w-full py-2 "
            />
          </div>
        </div>
        <div className=" p-6 mb-16 ">
          {hospitalData.map((data) => {
            return (
              <div className="border-b-2 border-grey py-4" key={data.id}>
                <div className="flex justify-between items-center  ">
                  <h1
                    className="mr-3"
                    style={{
                      color:
                        data.category == "busy"
                          ? "blue"
                          : data.category == "available"
                            ? "green"
                            : "red",
                    }}
                  >
                    {data.hospital_name}
                  </h1>

                  <span
                    className="px-2 text-white rounded-full"
                    style={{
                      backgroundColor:
                        data.category == "busy"
                          ? "blue"
                          : data.category == "available"
                            ? "green"
                            : "red",
                    }}
                  >
                    {data.category.toLowerCase()}
                  </span>
                </div>
                <p className="text-dark">{data.loaction}</p>
              </div>
            );
          })}
        </div>
        <div className="p-1 px-4  ring-2 ring-grey/25 fixed  bg-white  bottom-0 w-full ">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#cc1100"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-6 text-red inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <p className="text-red ">Home</p>
              </Link>
            </div>
            <div className="text-center">
              <Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                  strokeWidth={7}
                  stroke="#7D7D7D"
                  className="size-6 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <p className="text-grey">
                  First Aid <br /> Tips
                </p>
              </Link>
            </div>
            <div className="text-center">
              <Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#7D7D7D"
                  className="size-6 inline "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <p className="text-grey">
                  Emergency <br /> Hotlines
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
