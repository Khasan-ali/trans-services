// 'use client'


// import { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// export default function BarChartJs() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');

//     // Set the canvas background color
//     ctx.save();
//     ctx.fillStyle = 'rgba(240, 240, 240, 0.8)'; // Your desired background color
//     ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     ctx.restore();

//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//           label: 'Votes',
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   }, []);

//   return (
//     <canvas ref={chartRef} width="400" height="400"></canvas>
//   );
// };