"use client"
// MyApexChart.js
import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const PaymentChart = () => {
  // Define the chart options
  const [chartOptions] = useState({
    chart: {
      id: '',
    },
    xaxis: {
      title: {
        text: 'Months',
      },
      tickAmount: 10, // Ensure a reasonable number of ticks on x-axis
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '',
      },
    },
    title: {
      text: '',
      align: 'center',
      style: {
        fontSize: '18px',
      },
    },
  });

  // Define the chart data (scatter points with x, y coordinates)
  const [chartData] = useState([
    {
      name: 'Sales',
      data: [
        [0, 30], // 'Jan' corresponds to 0 on x-axis
        [1, 40], // 'Feb' corresponds to 1, and so on
        [2, 45],
        [3, 50],
        [4, 49],
        [5, 60],
        [6, 70],
        [7, 91],
        [8, 125],
        [9, 110], // 'Oct'
      ],
    },
  ]);

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartData}
        type="scatter" // Updated to scatter chart
        width="600"
      />
    </div>
  );
};

export default PaymentChart;