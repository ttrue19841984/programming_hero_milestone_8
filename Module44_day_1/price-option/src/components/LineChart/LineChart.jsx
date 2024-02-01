
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: "Student 1", math: 85, phy: 78, chem: 92 },
        { id: 2, name: "Student 2", math: 78, phy: 82, chem: 75 },
        { id: 3, name: "Student 3", math: 92, phy: 88, chem: 91 },
        { id: 4, name: "Student 4", math: 65, phy: 72, chem: 68 },
        { id: 5, name: "Student 5", math: 88, phy: 94, chem: 87 },
        { id: 6, name: "Student 6", math: 75, phy: 79, chem: 83 },
        { id: 7, name: "Student 7", math: 96, phy: 91, chem: 98 },
        { id: 8, name: "Student 8", math: 70, phy: 76, chem: 72 },
        { id: 9, name: "Student 9", math: 84, phy: 89, chem: 85 },
        { id: 10, name: "Student 10", math: 91, phy: 87, chem: 94 }
      ];
      



  return (
    <div>
      <LChart width={800} height={400} data={studentData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke='red'></Line>
        <Line dataKey="phy" stroke='yellow'></Line>
      </LChart>
    </div>
  )
}

export default LineChart
