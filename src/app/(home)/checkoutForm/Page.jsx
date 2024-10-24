"use client"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartContext from "@/app/Context/CartContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DeliveryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    region: "",
    city: "",
    phoneNumber: "",
    building: "",
    area: "",
    address: "",
  });

  const [divisions, setDivisions] = useState()
  const [dd, setCity] = useState()
  const [area, setArea] = useState()

  // console.log(formData);


  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        if (!formData?.region) {
          axios.get('https://bdapis.com/api/v1.2/divisions')
            .then(response => setDivisions(response?.data?.data))
        }
        if (formData?.region) {

          const region = formData?.region
          axios.post('http://localhost:3000/api/location', { region })
            .then(response => {
              console.log(response?.data),
                setCity(response?.data)
            })
        }
        if (formData?.city) {

          const city = formData?.city
          axios.post(`http://localhost:3000/api/location`, { city })
            .then(response => {
              console.log(response?.data),
                setArea(response?.data)
            })

        }



      } catch (err) {
        console.error('Error fetching cities:', err);

        // Retry logic (optional)
        setTimeout(() => {
          fetchData();  // Retry the request
        }, 3000);  // Retry after 3 seconds
      } finally {
        setLoading(false);
      }
    }


    fetchData();  // Call the function to fetch data on component mount

    return () => {
      // Cleanup if necessary (e.g., abort controller)
    };
  }, [formData?.region, formData.city]);







  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(dd?.city);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };




  const userData=useSession()
  // const router=useRouter()
  
  const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);
  const [hasCoupon, setHasCoupon] = useState(false); // State to handle checkbox
  const [coupon, setCoupon] = useState(""); // State to store coupon input
  const [discount, setDiscount] = useState(0); // State to store discount

  


  // console.log(cart.cartItems,'cart is here ');


  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty > Number(cartItem.stock)) return;

    addItemToCart(item);
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty <= 0) return;

    addItemToCart(item);
  };

  // Calculate amounts
  const amountWithoutTax = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);
  const totalAmountBeforeDiscount = (
    Number(amountWithoutTax) + Number(taxAmount)
  ).toFixed(2);

  // Apply discount
  const totalAmountAfterDiscount = (
    totalAmountBeforeDiscount * (1 - discount / 100)
  ).toFixed(2);

  // Apply coupon code logic
  const applyCoupon = () => {
    // Example coupon logic (you can replace this with your own logic)
    if (coupon === "SAVE10") {
      setDiscount(10);
    } else if (coupon === "SAVE20") {
      setDiscount(20);
    } else {
      alert("Invalid coupon code");
      setDiscount(0);
    }
  };

 
  const handlePayment = async () => {

  
// router.push('/checkoutForm')
   
    const amount=totalAmountAfterDiscount || totalAmountBeforeDiscount

    const allData={
      amount,
      name:formData?.fullName,
      email: userData?.data?.user?.email,
      foodItems:cart?.cartItems,
      userPhoneNumber: formData?.phoneNumber,
      userAddress: `${formData?.address}, ${formData?.building}, ${formData?.area}, , ${formData?.city}, ${formData?.region}`,
      
  
      
    }

const data= axios.post('http://localhost:5000/checkOut',allData)
    .then((response)=>{ 
        console.log(response)

        if (response?.data?.url) {
          window.location.href = response.data.url; // Redirect to SSLCommerz payment page
        }
      })
//       console.log(data);
      



  }
  return (
    <>
      <h2 className="text-2xl px-6 py-3 font-semibold mb-4">Delivery Information</h2>

      <div className="container mb-10 lg:flex-row gap-4 md:flex-row flex flex-col  mx-auto px-6">
        <form onSubmit={handleSubmit} className="grid gap-6 lg:w-[70%] md:w-[70%]  md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="font-medium">Full name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name"
              className={`border border-gray-300 p-2 rounded mt-2 focus:ring focus:ring-blue-500`}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="region" className="font-medium">Region</label>
            <select
              name="region"
              id="region"
              value='Please Chose Your Region'
              onChange={handleChange}
              className={`border  border-gray-300 p-2 rounded mt-2 focus:ring focus:ring-blue-500`}
            >
              <option className="text-gray-300"  >{formData.region || 'Please choose Your Region'}</option>
              {
                divisions?.map((division, index) => (
                  <option key={index} value={`${division?.division}`}>{division?.division}</option>
                ))
              }

            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="font-medium">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Please enter your phone number"
              className="border border-red-500 p-2 rounded mt-2 focus:ring focus:ring-red-500"
            />
            <span className="text-red-500 text-sm mt-1">You can't leave this empty.</span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="font-medium">City</label>
            <select
              name="city"
              id="city"
              value={`${formData.city || 'Please select a city'}`}
              onChange={handleChange}
              disabled={formData?.region ? false : true}
              className={`border  ${formData?.region ? '' : 'cursor-not-allowed disabled'} border-gray-300 p-2 rounded mt-2 focus:ring focus:ring-blue-500`}
            >
              <option className={`text-gray-300 ${formData?.region ? '' : 'cursor-not-allowed disabled'}`}>{formData?.city || 'Please choose Your City'}</option>

              {dd?.map(data => <option value={`${data?.city}`}>{data?.city}</option>)}

            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="building" className="font-medium">Building / House No / Floor / Street</label>
            <input
              type="text"
              name="building"
              id="building"
              value={formData.building}
              onChange={handleChange}
              placeholder="Please enter Your Building or Others"
              className="border border-red-500 p-2 rounded mt-2 focus:ring focus:ring-red-500"
            />
            <span className="text-red-500 text-sm mt-1">You can't leave this empty.</span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="area" className="font-medium">Area</label>
            <select
              name="area"
              id="area"
              value={`${formData.area || 'Please select a city'}`}
              disabled={formData?.city ? false : true}

              onChange={handleChange}
              className={`border  ${formData?.city ? '' : 'cursor-not-allowed disabled'} border-gray-300 p-2 rounded mt-2 focus:ring focus:ring-blue-500`}
            >
              <option className={`text-gray-300 ${formData?.city ? '' : 'cursor-not-allowed disabled'}`}>{formData?.area || 'Please choose Your City'}</option>

              {
                area?.map((data) => <option value={`${data}`}>{data}</option>)
              }
            </select>
          </div>

          {/* <div className="flex flex-col">
        <label htmlFor="colony" className="font-medium">Colony / Suburb / Locality / Landmark</label>
        <input
          type="text"
          name="colony"
          id="colony"
          value={formData.colony}
          onChange={handleChange}
          placeholder="Please enter"
          className="border border-gray-300 p-2 rounded mt-2 focus:ring focus:ring-blue-500"
        />
      </div> */}

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="address" className="font-medium">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder="Ex: Haydarabad 39 no word tongi gazipur"
              className="border border-gray-300 p-2 rounded mt-2 focus:ring focus:ring-blue-500"
            />
          </div>

          {/* <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Proceed to Pay
          </button> */}
        </form>
        <article className="border lg:w-[30%] md:w-[30%] w-full border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                  <ul className="mb-5">
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Amount before Tax:</span>
                      <span>${amountWithoutTax}</span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Total Units:</span>
                      <span className="text-green-500">
                        {cart?.cartItems?.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        )}{" "}
                        (Units)
                      </span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>TAX:</span>
                      <span>${taxAmount}</span>
                    </li>
                    <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                      <span>Total price:</span>
                      <span>${totalAmountAfterDiscount}</span>
                    </li>
                  </ul>

                  {/* Checkbox for coupon */}
                  <div className="mb-4">
                    <input
                      type="checkbox"
                      id="hasCoupon"
                      checked={hasCoupon}
                      onChange={(e) => setHasCoupon(e.target.checked)}
                    />
                    <label htmlFor="hasCoupon" className="ml-2">
                      Do you have a coupon code?
                    </label>
                  </div>

                  {/* Conditionally render the coupon input */}
                  {hasCoupon && (
                    <div className="mb-4">
                      <input
                        type="text"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Enter coupon code"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      <button
                        onClick={applyCoupon}
                        className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      >
                        Apply Coupon
                      </button>
                    </div>
                  )}

                  <a onClick={handlePayment} className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer">
                    Continue
                  </a>

                  <Link
                    href="/"
                    className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                  >
                    Back to shop
                  </Link>
                </article>
      </div>


    </>
  );
};

export default DeliveryForm;
