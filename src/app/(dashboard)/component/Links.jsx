// component/Links.js
import { FaUser, FaHistory, FaCreditCard, FaUtensils, FaTruck, FaUserCog, FaUserShield, FaTag } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";

const links = {
  user: [
    { href: "/dashboard/userProfile", label: "Profile", icon: <FaUser /> },
    { href: "/dashboard/orderHistory", label: "Order History", icon: <FaHistory /> },
    { href: "/dashboard/transaction", label: "Transactions", icon: <FaCreditCard /> },
  ],
  owner: [
    { href: "/dashboard/ownerProfile", label: "Owner Profile", icon: <FaUser /> },
    { href: "/dashboard/mangeMenu", label: "Manage Menu", icon: <FaUtensils /> },
    { href: "/dashboard/Owner-history", label: "History", icon: <FaHistory /> },
  ],
  deliveryMan: [
    { href: "/dashboard/deleverMan-Profile", label: "Profile", icon: <FaUser /> },
    { href: "/dashboard/orders", label: "Orders", icon: <FaTruck /> },
    { href: "/dashboard/historys", label: "History", icon: <FaHistory /> },
  ],
  admin: [
    { href: "/dashboard/adminProfile", label: "AdminProfile", icon: <FaUser /> },
    { href: "/dashboard/manageResturants", label: "Manage Restaurants", icon: <FaUtensils /> },
    { href: "/dashboard/manage-user", label: "Manage Users", icon: <FaUserCog /> },
    { href: "/dashboard/manage-deleveryMan", label: "Manage Delivery Man", icon: <FaTruck /> },
  
    { href: "/dashboard/coupon", label: "Coupon", icon: <FaTag /> },
    { href: "/dashboard/manageResturants", label: "Manage Resturant", icon: <FaBowlFood /> },
  ],
};

export default links;
