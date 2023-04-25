import * as React from "react";
import { PieChart } from "react-minimal-pie-chart"


const Chart = () => {




    const data = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 500
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ]

    return (
        <div className="App">
            {/*<h1>Charts students</h1> */}

            <PieChart
                style={{ height: 450, fontFamily: "monospace", FontSize: 16, marginTop: 100}}
                data={[
                    { name: 'passed students', value: 20, color: 'green' },
                    { name: 'failed students', value: 5, color: 'red' },
                ]}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                labelPosition="50"
                animate={true}

            ></PieChart>

            <div className="charts" style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
                <ul>
                    <li style={{ color: "green", display: "flex", flexDirection: "row",  gap: 10 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        Passed students
                    </li>
                    
                    <li style={{ color: "red", display: "flex", flexDirection: "row" ,  gap: 10 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    Failed students</li>
                </ul>
            </div>

        </div>
    )
}

export default Chart
