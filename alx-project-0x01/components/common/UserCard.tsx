import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md rounded-2xl shadow-md border p-6 bg-white">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-gray-500">{username}</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-500">{email}</p>
          <p className="text-sm text-gray-500">{phone}</p>
          <p className="text-sm text-gray-500">{website}</p>
        </div>

        {/* Address */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            {address.street}, {address.suite}, {address.city}, {address.zipcode}
          </p>
        </div>

        {/* Company */}
        <div className="flex items-start gap-2">
          <p className="font-medium">{company.name}</p>
          <p className="text-sm text-gray-600 italic">{company.catchPhrase}</p>
        </div>
      </div>
    </main>
  );
};

export default UserCard;
