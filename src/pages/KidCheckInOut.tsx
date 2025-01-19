import React, { useState } from "react";

// Define the Kid interface
interface Kid {
  id: number;
  name: string;
  age: number;
  status: "checked-in" | "checked-out";
}

// Simulated backend data
const initialKids: Kid[] = [
  { id: 1, name: "Alice", age: 5, status: "checked-out" },
  { id: 2, name: "Bob", age: 7, status: "checked-out" },
  { id: 3, name: "Charlie", age: 6, status: "checked-out" },
  { id: 4, name: "Daisy", age: 8, status: "checked-in" },
];

const KidCheckInOut: React.FC = () => {
  const [kids, setKids] = useState<Kid[]>(initialKids);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function to toggle a kid's status
  const toggleStatus = (id: number) => {
    setKids((prevKids) =>
      prevKids.map((kid) =>
        kid.id === id
          ? {
              ...kid,
              status:
                kid.status === "checked-in" ? "checked-out" : "checked-in",
            }
          : kid
      )
    );
  };

  // Filter kids based on the search term
  const filteredKids = kids.filter((kid) =>
    kid.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kid Check-In/Check-Out</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search kid by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>

      {/* Kid Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Age</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredKids.length > 0 ? (
            filteredKids.map((kid) => (
              <tr key={kid.id}>
                <td className="border border-gray-300 p-2 text-center">
                  {kid.id}
                </td>
                <td className="border border-gray-300 p-2">{kid.name}</td>
                <td className="border border-gray-300 p-2 text-center">
                  {kid.age}
                </td>
                <td
                  className={`border border-gray-300 p-2 text-center ${
                    kid.status === "checked-in"
                      ? "bg-green-100 text-green-600 font-semibold"
                      : "bg-red-100 text-red-600 font-semibold"
                  }`}
                >
                  {kid.status}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    onClick={() => toggleStatus(kid.id)}
                    className={`px-4 py-2 rounded ${
                      kid.status === "checked-in"
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  >
                    {kid.status === "checked-in" ? "Check Out" : "Check In"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="border border-gray-300 p-2 text-center"
              >
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default KidCheckInOut;
