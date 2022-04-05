const paymentHeader = () => {
    return (
        {
            "Authorization": `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
            "Content-Type": "application/json"
        }
    )
}

export default paymentHeader;
