// component/Links.js
import { FaUser, FaHistory, FaCreditCard, FaUtensils, FaTruck, FaUserCog, FaUserShield, FaTag } from "react-icons/fa";

const links = {
  user: [
    { href: "/dashboard", label: "Profile", icon: <FaUser /> },
    { href: "/dashboard/orderHistory", label: "Order History", icon: <FaHistory /> },
    { href: "/dashboard/transaction", label: "Transactions", icon: <FaCreditCard /> },
  ],
  owner: [
    { href: "/dashboard", label: "Owner Profile", icon: <FaUser /> },
    { href: "/dashboard/mangeMenu", label: "Manage Menu", icon: <FaUtensils /> },
    { href: "/dashboard/Owner-history", label: "History", icon: <FaHistory /> },
  ],
  deliveryMan: [
    { href: "/dashboard", label: "Profile", icon: <FaUser /> },
    { href: "/dashboard/orders", label: "Orders", icon: <FaTruck /> },
    { href: "/dashboard/historys", label: "History", icon: <FaHistory /> },
  ],
  admin: [
    { href: "/dashboard", label: "AdminProfile", icon: <FaUser /> },
    { href: "/dashboard/manageResturants", label: "Manage Restaurants", icon: <FaUtensils /> },
    { href: "/dashboard/manageUser", label: "Manage Users", icon: <FaUserCog /> },
    { href: "/dashboard/manage-deleveryMan", label: "Manage Delivery Man", icon: <FaTruck /> },
  
    { href: "/dashboard/cupons", label: "Coupon", icon: <FaTag /> },
  ],
};

export default links;
