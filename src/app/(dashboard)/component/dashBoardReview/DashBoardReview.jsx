import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsExclamationCircle } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const DashBoardReview = ({item}) => {
  const [showReport, setShowReport] = useState(false);
  const [reportText, setReportText] = useState("");
  console.log(item);

  const handleReportClick = () => {
    setShowReport(!showReport);
  };

  const handleSubmit = () => {
    alert("Report submitted: " + reportText);
    setReportText("");
    setShowReport(false);
  };

  // Static data for demonstration
 

  return (
    <div className="bg-white px-4 pt-4 pb-12 mt-12">
      <h1 className="text-2xl">Restuarant Specification & Summary</h1>

      <Tabs>
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Specification</Tab>
          <Tab>Author</Tab>
        </TabList>

        {/* Summary Tab */}
        <TabPanel>
          <h2 className="px-8 py-4">{item?.about_us
          }</h2>
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
                  <td className="p-2 border border-gray-400 w-2/3">Sajib wazed Joy</td>
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
                  <td className="p-2 bg-gray-200 border border-gray-400 w-1/3">Number of Delevery</td>
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
              <p className="md:text-center md:flex gap-2 justify-center">
                
               
              </p>
             
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold my-4">Sajib Wazed Joy</h1>
              <h2>Sheikh hasinar chele</h2>
            </div>
          </div>
        </TabPanel>
      </Tabs>

      <h1
        className={`text-red-600 text-center mt-6 border-b border-t pt-4 pb-6 cursor-pointer flex justify-center ${showReport && "border-none"} gap-4 items-center`}
        onClick={handleReportClick}
      >
        <BsExclamationCircle /> Report to Restuarant Owner if something is else 
      </h1>

      {showReport && (
        <div className="mt-4">
          <textarea
            className="w-full p-3 border rounded focus:border-green-600 outline-none"
            rows={4}
            value={reportText}
            onChange={(e) => setReportText(e.target.value)}
            placeholder="Describe the incorrect information..."
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default DashBoardReview;
