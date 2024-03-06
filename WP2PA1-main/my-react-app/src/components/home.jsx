import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    const [clients, setClients] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('https://www.randyconnolly.com/funwebdev/3rd/api/stocks/client.php')
            .then(response => response.json())
            .then(data => {
                setClients(data);
            })
            .catch(error => console.error('Error fetching clients:', error));
    }, []);

    const handleClientSelect = (clientId) => {
        // Navigate to client view with selected client id
        history.push(`/client/${clientId}`);
    };

    return (
        <div>
            <h2>Home</h2>
            <p>Select a client:</p>
            <select onChange={(e) => handleClientSelect(e.target.value)}>
                <option value="">Select Client</option>
                {clients.map(client => (
                    <option key={client.id} value={client.id}>{client.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Home;
