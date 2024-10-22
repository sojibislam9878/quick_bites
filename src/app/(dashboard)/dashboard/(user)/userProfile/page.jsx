
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';


function UserProfile() {

  const data = {
    name: "John do",
    role:"User",
    email: "john@example.com",
    image:"https://thumbs.dreamstime.com/b/delivery-boy-ride-scooter-motorcycle-servic-service-order-worldwide-shipping-fast-free-transport-75096257.jpg",
  };
  return (
    <div>

    <div className="min-h-screen flex justify-center items-center p-4 lg:p-0">


    <div className="bg-gray-200 text-[#533831] selection:text-white rounded-lg shadow-lg p-8 w-full">
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <img
          src={data.image}
          alt="Profile Picture"
          className="w-32 h-32 rounded-full object-cover mb-4 shadow-[-10px_-10px_30px_4px_rgba(223,198,173),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
        />

        {/* Name */}
        <h2 className="text-2xl font-bold text-[#533831]">{data.name}</h2>

        {/* Email */}
        <p className="text-gray-600 mb-6">{data.email}</p>
        <h1 className="text-red-500 font-bold text-2xl">{data.role}</h1>

        {/* Additional Info */}
     
      </div>
    </div>
  </div>
    </div>

   
  );
}

export default UserProfile; 
