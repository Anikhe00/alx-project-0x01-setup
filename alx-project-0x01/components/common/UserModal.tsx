import { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Partial<UserData>>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    path: string
  ) => {
    const keys = path.split(".");
    setFormData((prev) => {
      const updated: any = { ...prev };
      let current = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = e.target.value;
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...(formData as UserData), id: Date.now() });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-2/3 max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => handleChange(e, "username")}
            className="w-full border rounded p-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange(e, "email")}
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => handleChange(e, "phone")}
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Website"
            value={formData.website}
            onChange={(e) => handleChange(e, "website")}
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Company Name"
            value={formData.company?.name}
            onChange={(e) => handleChange(e, "company.name")}
            className="w-full border rounded p-2"
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
