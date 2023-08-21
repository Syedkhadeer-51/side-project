import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "flowbite";
function Customers() {
  const heading = "Customers";
  const [searchVal, setSearchVal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({});
  const people = [
    {
      name: "Said Al Ruzaiqi",
      email: "said.alruzaiqi@example.com",
      role: "House Buyer",
      propertyType: "Residential",
      investmentAmount: 500000,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
      phone: "7892749256",
      address: "#234, St. Marks Street, Manhattan, New York, 10011, USA",
    },
    {
      name: "Zahra Al Siyabi",
      email: "zahra.alsiyabi@example.com",
      role: "Land Buyer",
      propertyType: "Commercial",
      investmentAmount: 1000000,
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
      phone: "7892749256",
      address: "#234, St. Marks Street, Manhattan, New York, 10011, USA",
    },
    {
      name: "Khalid Al Barwani",
      email: "khalid.albarwani@example.com",
      role: "House Renter",
      propertyType: "Residential",
      investmentAmount: 2000,
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
      phone: "7892749256",
      address: "#234, St. Marks Street, Manhattan, New York, 10011, USA",
    },
    {
      name: "Aisha Al Ghaithi",
      email: "aisha.alghaithi@example.com",
      role: "Lease Holder",
      propertyType: "Office",
      investmentAmount: 10000,
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
      phone: "7892749256",
      address: "#234, St. Marks Street, Manhattan, New York, 10011, USA",
    },
    {
      name: "Hamad Al Kharusi",
      email: "hamad.alkharusi@example.com",
      role: "Project Investor",
      propertyType: "Mixed-Use",
      investmentAmount: 750000,
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
      phone: "7892749256",
      address: "#234, St. Marks Street, Manhattan, New York, 10011, USA",
    },
    {
      name: "Mariam Al Badi",
      email: "mariam.albadi@example.com",
      role: "Office Space Renter",
      propertyType: "Commercial",
      investmentAmount: 5000,
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
      phone: "7892749256",
      address: "#234, St. Marks Street, Manhattan, New York, 10011, USA",
    },
  ];

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-10">
          <h1 className=" text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl">
            {heading}
          </h1>
          <div className="relative">
            <FiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-red-950 left-3" />

            <input
              type="text"
              placeholder="Search"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className=" w-[20rem] py-3 pl-12 pr-4  border  rounded-full outline-none bg-gray-50 focus:bg-white focus:border-red-950"
            />
          </div>
        </div>

        <table className="w-full min-w-max table-auto text-left text-sm  text-black ">
          <thead>
            <th scope="col" className=" font-normal">
              Name
            </th>
            <th scope="col" className=" font-normal">
              Email
            </th>
            <th scope="col" className=" font-normal">
              Phone
            </th>
            <th scope="col" className="font-normal">
              Address
            </th>
            <th></th>
          </thead>
          <tbody>
            {people.map((person, idx) => {
              return (
                <tr className=" m-3 box-border rounded-md">
                  <td className="flex items-center gap-3 my-8 ">
                    <img
                      className="h-10 w-10 flex-none rounded-full bg-zinc-50"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div
                      className={
                        person.lastSeen
                          ? "flex flex-col"
                          : "flex flex-row items-center"
                      }
                    >
                      <p className="text-sm font-normal leading-6 text-zinc-900">
                        {person.name}
                      </p>
                      {!person.lastSeen ? (
                        <div className="flex-none h-[50%] ml-1 rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                      ) : (
                        <>
                          <p className="mt-1 text-xs leading-5 text-zinc-500">
                            Last seen{" "}
                            <time dateTime={person.lastSeenDateTime}>
                              {person.lastSeen}
                            </time>
                          </p>
                        </>
                      )}
                    </div>
                  </td>
                  <td>
                    <p className="mt-1 truncate text-sm leading-6 text-zinc-500">
                      {person.email}
                    </p>
                  </td>
                  <td>
                    <p className="mt-1 truncate text-sm leading-6 text-zinc-500">
                      {person.phone}
                    </p>
                  </td>
                  <td>
                    <p className="mt-1 truncate whitespace-nowrap  text-sm leading-6 text-zinc-500">
                      {person.address}
                    </p>
                  </td>
                  <td className="whitespace-nowrap ">
                    <button
                    onClick={() => {
                      setCustomerDetails(person);
                      return setOpenModal(true);
                    }}
                  >
                    <BsFillCaretDownFill className="w-5 h-5" />{" "}
                  </button>

                    {/* <button
                      data-popover-target="popover-click"
                      data-popover-trigger="click"
                      data-popover-placement="bottom"
                      type="button"
                      className="text-white mb-3 whitespace-nowrap  focus:none focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      <BsFillCaretDownFill className="w-5 h-5 text-red-950" />
                    </button> */}

                   
                    <div
                      data-popover
                      id="popover-click"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                    >
                      <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Popover click
                        </h3>
                      </div>
                      <div className="px-3 py-2">
                        <p className="whitespace-pre-line">
                          And here's some amazing content. It's very engaging.
                          Right?
                        </p>
                      </div>
                      <div data-popper-arrow></div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <ul role="list" className="divide-y divide-zinc-100">
          {people.map((person) => (
            <li
              key={person.email}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-zinc-50"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-zinc-900">
                    {person.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-zinc-500">
                    {person.email}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-zinc-900">{person.role}</p>
                <p className="text-sm leading-6 text-zinc-900">
                  {person.propertyType}
                </p>
                {person.lastSeen ? (
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    Last seen{" "}
                    <time dateTime={person.lastSeenDateTime}>
                      {person.lastSeen}
                    </time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-zinc-500">Online</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <Modal
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        customer={customerDetails}
      /> */}
    </>
  );
}

export default Customers;
