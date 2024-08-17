const { useState, useEffect } = React;

const PricingSection = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    const pricingData = [
        { model: 'OpenAI GPT-3.5', price: 0.002 },
        { model: 'OpenAI GPT-4', price: 0.03 },
        { model: 'Together AI Llama-2-70b', price: 0.0008 },
        { model: 'Together AI Llama-2-13b', price: 0.0006 },
    ];

    return (
        <div className="container">
            <div className="header">
                <h1>API Pricing</h1>
                <button onClick={toggleDarkMode} className="toggle-btn" aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
            </div>
            
            <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
            
            <table>
                <thead>
                    <tr>
                        <th>API Model</th>
                        <th>Price per 1K tokens</th>
                    </tr>
                </thead>
                <tbody>
                    {pricingData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.model}</td>
                            <td className="price">${item.price.toFixed(4)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <h2>Token Estimation</h2>
            <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
            
            <h2>Billing</h2>
            <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
        </div>
    );
};

ReactDOM.render(<PricingSection />, document.getElementById('root'));