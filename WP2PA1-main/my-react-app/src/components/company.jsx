import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Company() {
    const [companyInfo, setCompanyInfo] = useState(null);
    const [stockHistory, setStockHistory] = useState([]);
    const { companyId } = useParams();

    useEffect(() => {
        fetch(`https://www.randyconnolly.com/funwebdev/3rd/api/stocks/companies.php?id=${companyId}`)
            .then(response => response.json())
            .then(data => {
                setCompanyInfo(data[0]); // Assume only one company is returned
            })
            .catch(error => console.error('Error fetching company info:', error));

        fetch(`https://www.randyconnolly.com/funwebdev/3rd/api/stocks/history.php?symbol=${companyId}`)
            .then(response => response.json())
            .then(data => {
                setStockHistory(data);
            })
            .catch(error => console.error('Error fetching stock history:', error));
    }, [companyId]);

    return (
        <div>
            <h2>Company</h2>
            {companyInfo && (
                <div>
                    <h3>Company Information</h3>
                    <p>ID: {companyInfo.id}</p>
                    <p>Name: {companyInfo.name}</p>
                    {/* Add more company information fields as needed */}
                </div>
            )}
            <h3>Stock Charts</h3>
            <div>
                <h4>Daily High and Low Values</h4>
                <LineChart width={600} height={300} data={stockHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="high" stroke="#8884d8" />
                    <Line type="monotone" dataKey="low" stroke="#82ca9d" />
                </LineChart>
                <h4>Daily Volume Values</h4>
                <LineChart width={600} height={300} data={stockHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="volume" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    );
}

export default Company;
