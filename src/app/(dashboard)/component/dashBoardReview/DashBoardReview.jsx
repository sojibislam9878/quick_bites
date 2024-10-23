import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsExclamationCircle } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CouponSpinner from "@/app/component/coupon/CouponSpinner";

const DashBoardReview = ({ item }) => {
  const [showReport, setShowReport] = useState(false);
  const [reportText, setReportText] = useState("");
  const [loading, setLoading] = useState(false)

  const handleReportClick = () => {
    setShowReport(!showReport);
  };
  console.log(item, 'mono');

  const handleSubmit = async () => {
    if (reportText.trim()) {
      await reportSentToOwner(reportText);
      setReportText(""); // Clear the textarea after submission
    } else {
      toast.error("Please enter a valid report!");
    }
  };

  // Send reportText to the API
  const reportSentToOwner = async (reportText) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/reportToOwner/${item.slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ report: reportText }),
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false)
        toast.success(`Report sent to ${item.name} owner!`);
  
      } else {
        setLoading(false)
        toast.error(data.message || "Failed to send the report.");
      }
    } catch (error) {
      setLoading(false)
      toast.error("An error occurred while sending the report.");
    }
  };
  

  return (
    <div className="bg-white px-4 pt-4 pb-12 mt-12">
      <ToastContainer /> {/* Toast container to show notifications */}
      <h1 className="text-2xl">Restaurant Specification & Summary</h1>

      <Tabs>
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Specification</Tab>
          <Tab>Author</Tab>
          <Tab>Report</Tab> {/* New Report Tab */}
        </TabList>

        {/* Summary Tab */}
        <TabPanel>
          <h2 className="px-8 py-4">{item?.about_us}</h2>
        </TabPanel>

        {/* Specification Tab */}
        <TabPanel>
          <div className="px-8 py-4">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <tbody>
                <tr>
                  <td className="p-2 bg-gray-200 border border-gray-400 w-1/3">Title</td>
                  <td className="p-2 border border-gray-400 w-2/3">{item?.name}</td>
                </tr>
                <tr>
                  <td className="p-2 bg-gray-200 border border-gray-400 w-1/3">Author</td>
                  <td className="p-2 border border-gray-400 w-2/3">Sajib Wazed Joy</td>
                </tr>
                <tr>
                  <td className="p-2 bg-gray-200 border border-gray-400 w-1/3">Opens At</td>
                  <td className="p-2 border border-gray-400 w-2/3">{item?.opensAt}</td>
                </tr>
                <tr>
                  <td className="p-2 bg-gray-200 border border-gray-400 w-1/3">Trend no</td>
                  <td className="p-2 border border-gray-400 w-2/3">35464565466</td>
                </tr>
                <tr>
                  <td className="p-2 bg-gray-200 border border-gray-400 w-1/3">Start With Quick Bites</td>
                  <td className="p-2 border border-gray-400 w-2/3">2024</td>
                </tr>
                <tr>
                  <td className="p-2 bg-gray-200 border border-gray-400 w-1/3">Number of Delivery</td>
                  <td className="p-2 border border-gray-400 w-2/3">26</td>
                </tr>
                <tr>
                  <td className="p-2 bg-gray-200 border border-gray-400 w-1/3">Location</td>
                  <td className="p-2 border border-gray-400 w-2/3">{item?.location}</td>
                </tr>
                <tr>
                  <td className="p-2 bg-gray-200 border border-gray-400 w-1/3">Active</td>
                  <td className="p-2 border border-gray-400 w-2/3">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>

        {/* Author Tab */}
        <TabPanel>
          <div className="md:flex gap-12 px-8">
            <div className="mt-4">
              <FaUser size={64} />
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold my-4">Sajib Wazed Joy</h1>
              <h2>Sheikh Hasina  son</h2>
            </div>
          </div>
        </TabPanel>

        {/* Report Tab */}
        <TabPanel>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold mb-4">Reports</h2>
            {item?.report
?.length > 0 ? (
              <div className="space-y-4">
                {item?.report
?.map((rep, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-lg shadow-sm bg-gray-50"
                  >
                    <p className="font-semibold">Report:</p>
                    <p>{rep.report}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Date: {new Date(rep.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No reports available.</p>
            )}
          </div>
        </TabPanel>
      </Tabs>

      {/* Report Submission Section */}
      <h1
        className={`text-red-600 text-center mt-6 border-b border-t pt-4 pb-6 cursor-pointer flex justify-center ${
          showReport && "border-none"
        } gap-4 items-center`}
        onClick={handleReportClick}
      >
        <BsExclamationCircle /> Report to Restaurant Owner if something is wrong
      </h1>

      {showReport && (
        <div className="mt-4">
          <textarea
            className="w-full p-3 border rounded focus:border-green-600 outline-none"
            rows={4}
            value={reportText}
            onChange={(e) => setReportText(e.target.value)}
            placeholder="Warning to the restaurant owner if something went wrong..."
          />
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded mt-2"
            disabled={loading}
            onClick={handleSubmit}
          >
           {loading ? 'Loading....': ' Submit'}
          </button>
        </div>
      )}
    </div>
  );
};

export default DashBoardReview;
