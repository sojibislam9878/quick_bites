import { BsExclamationCircle } from "react-icons/bs";


const DashBoardReview = ({review}) => {
    return (
        <div>
             <div className="bg-white px-4 pt-4 pb-12 mt-12">
      <h1 className="text-2xl">Product Specification & Summary</h1>

      <Tabs>
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Specification</Tab>
          <Tab>Author</Tab>
        </TabList>

        {/* Summary Tab */}
        <TabPanel>
          <h2 className="px-8 py-4">{product?.summary}</h2>
        </TabPanel>

        {/* Specification Tab */}
        <TabPanel>
          <div className="px-8 py-4">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <tbody>
                <tr>
                  <td className="p-2  bg-gray-200 border border-gray-400 w-1/3">
                    Title
                  </td>
                  <td className="p-2 border border-gray-400 w-2/3">
                    {product?.productName}
                  </td>
                </tr>
                <tr>
                  <td className="p-2  bg-gray-200 border border-gray-400 w-1/3">
                    Author
                  </td>
                  <td className="p-2 border border-gray-400 w-2/3">
                    {product?.author}
                  </td>
                </tr>
                <tr>
                  <td className="p-2  bg-gray-200 border border-gray-400 w-1/3">
                    Publisher
                  </td>
                  <td className="p-2 border border-gray-400 w-2/3">
                    {product?.publication}
                  </td>
                </tr>
                <tr>
                  <td className="p-2  bg-gray-200 border border-gray-400 w-1/3">
                    ISBN
                  </td>
                  <td className="p-2 border border-gray-400 w-2/3">
                    {product?.isbn}
                  </td>
                </tr>
                <tr>
                  <td className="p-2  bg-gray-200 border border-gray-400 w-1/3">
                    Edition
                  </td>
                  <td className="p-2 border border-gray-400 w-2/3">
                    {product?.edition}
                  </td>
                </tr>
                <tr>
                  <td className="p-2  bg-gray-200 border border-gray-400 w-1/3">
                    Number of Pages
                  </td>
                  <td className="p-2 border border-gray-400 w-2/3">
                    {product?.productLength}
                  </td>
                </tr>
                <tr>
                  <td className="p-2  bg-gray-200 border border-gray-400 w-1/3">
                    Country
                  </td>
                  <td className="p-2 border border-gray-400 w-2/3">
                    {product?.country}
                  </td>
                </tr>
                <tr>
                  <td className="p-2  bg-gray-200 border border-gray-400 w-1/3">
                    Language
                  </td>
                  <td className="p-2 border border-gray-400 w-2/3">
                    {product?.language}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>

        {/* Author Tab */}
        <TabPanel>
          <div className="md:flex gap-12 px-8">
            <div className="mt-4">
              <img src={tipoImg} alt="Author Image" />
              <p className="md:text-center md:flex gap-2 justify-center">
                <span className="font-semibold">{product?.authorFollower}</span>
                <span className="text-gray-500">Followers</span>
              </p>
              <button className="text-center bg-[#0397d3] text-white px-4 py-2 rounded mt-2 flex justify-center">
                Follow
              </button>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold my-4">{product?.author}</h1>
              <h2>{product?.authorDetails}</h2>
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <h1
        className={`text-red-600 text-center mt-6 border-b border-t pt-4 pb-6 cursor-pointer flex justify-center ${
          showReport && "border-none"
        } gap-4 items-center`}
        onClick={handleReportClick}
      >
        <BsExclamationCircle /> Report incorrect information
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

      {/* <ReviewRating />
      <Review /> */}
    </div>
        </div>
    );
};

export default DashBoardReview;