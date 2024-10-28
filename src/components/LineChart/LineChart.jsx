import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChart = () => {
    const studentsData = [
        { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 82 },
        { id: 2, name: "Bob", math: 78, physics: 85, chemistry: 80 },
        { id: 3, name: "Charlie", math: 92, physics: 89, chemistry: 94 },
        { id: 4, name: "Daisy", math: 67, physics: 72, chemistry: 70 },
        { id: 5, name: "Eve", math: 74, physics: 75, chemistry: 73 },
        { id: 6, name: "Frank", math: 88, physics: 82, chemistry: 84 },
        { id: 7, name: "Grace", math: 95, physics: 90, chemistry: 91 },
        { id: 8, name: "Hank", math: 81, physics: 76, chemistry: 79 },
        { id: 9, name: "Ivy", math: 76, physics: 80, chemistry: 77 },
        { id: 10, name: "Jack", math: 89, physics: 88, chemistry: 85 }
    ];

    return (
        <div>
            <LChart width={900} height={400} data={studentsData}>
                {/* Grid for reference lines */}
                <CartesianGrid strokeDasharray="3 3" />

                {/* X and Y Axes */}
                <XAxis dataKey="name" />
                <YAxis />

                {/* Tooltip to display values on hover */}
                <Tooltip />

                {/* Legend to identify each line */}
                <Legend />

                {/* Lines for each subject */}
                <Line type="monotone" dataKey="math" stroke="red" name="Math" />
                <Line type="monotone" dataKey="physics" stroke="black" name="Physics" />
                <Line type="monotone" dataKey="chemistry" stroke="green" name="Chemistry" />
            </LChart>
        </div>
    );
};

export default LineChart;
