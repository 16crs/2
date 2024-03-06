import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Client() {
    const [portfolio, setPortfolio] = useState([]);
    const [clientInfo, setClientInfo] = useState(null);
    const { clientId } = useParams();

    useEffect(() => {
        fetch(`https://www.randyconnolly.com/funwebdev/3rd/api/stocks/portfolio.php?id=${clientId}`)
            .then(response => response.json())
            .then(data => {
                setPortfolio(data.portfolio);
                setClientInfo(data.client);
            })
            .catch(error => console.error('Error fetching portfolio:', error));
    }, [clientId]);

    return (
        <div>
            <h2>Client</h2>
            {clientInfo && (
                <div>
                    <h3>Client Information</h3>
                    <p>ID: {clientInfo.id}</p>
                    <p>Name: {clientInfo.name}</p>
                    {/* Add more client information fields as needed */}
                </div>
            )}
            <h3>Top Three Stocks</h3>
            <div>
                {/* Display top three stocks here */}
            </div>
            <h3>Portfolio Details</h3>
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Company Name</th>
                        <th>Current Value</th>
                        <th>Number of Stocks</th>
                        <th>Total Value</th>
                    </tr>
                </thead>
                <tbody>
                    {portfolio.map(item => (
                        <tr key={item.symbol}>
                            <td>{item.symbol}</td>
                            <td>{item.name}</td>
                            <td>{item.currentValue}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.currentValue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Client;
