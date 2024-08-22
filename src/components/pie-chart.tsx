import React from 'react';

const PieChart = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  let cumulativePercentage = 0;

  return (
    <div className="relative w-64 h-64">
      {data.map((item, index) => {
        const percentage = (item.value / total) * 100;
        const startAngle = cumulativePercentage;
        cumulativePercentage += percentage;

        const style = {
          '--start-angle': `${startAngle * 3.6}deg`,
          '--end-angle': `${cumulativePercentage * 3.6}deg`,
          backgroundColor: item.color,
        };

        return (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full rounded-full clip-pie"
            style={style}
          ></div>
        );
      })}
      <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full" style={{ width: '50%', height: '50%', top: '25%', left: '25%' }}></div>
    </div>
  );
};

export default PieChart;
