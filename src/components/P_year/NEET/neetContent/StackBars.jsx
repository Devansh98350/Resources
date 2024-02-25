import React from "react";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    subject: "Physics",
    class_11th: 20,
    class_12th: 30,
  },
  {
    subject: "Chemistry",
    class_11th: 22,
    class_12th: 28,
  },
  {
    subject: "Botany",
    class_11th: 28,
    class_12th: 22,
  },
  {
    subject: "Zoology",
    class_11th: 27,
    class_12th: 23,
  },
];

function StackBars() {
  return (
    <>
      <div className="bar-size">
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="class_11th" fill="#FB62F6" />
          <Bar dataKey="class_12th" fill="#645DD7" />
        </BarChart>
      </div>
    </>
  );
}

export default StackBars;
