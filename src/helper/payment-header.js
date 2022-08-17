const paymentHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        {
            // "Authorization": `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
            "Authorization": `Bearer ${user.token}`,
            "Content-Type": "application/json"
        }
    )
}

export default paymentHeader;
