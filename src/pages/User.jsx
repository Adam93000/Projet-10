function User() {
    return (
        <main>
            <div className="user-container">
                <div className="user-header">
                    <h1>Welcome back<br /></h1>
                </div>
                <div className="accounts">
                    <h2 className="sr-only">Accounts</h2>
                    <section className="account">
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Checking (x8349)</h3>
                            <p className="account-amount">$2,082.79</p>
                            <p className="account-description">Available Balance</p>
                        </div>
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Savings (x6712)</h3>
                            <p className="account-amount">$10,928.42</p>
                            <p className="account-description">Available Balance</p>
                        </div>
                        <div className="account-content-wrapper">
                            <h3 className="account-title">Argent Credit Card (x8349)</h3>
                            <p className="account-amount">$1,800.00</p>
                            <p className="account-description">Current Balance</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default User;