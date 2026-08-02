function Home() {
    return (
        <main>
            <div className="hero">
                <p className="hero-subtitle">No virtual bank fees</p>
                <h1 className="hero-title">No monthly fees.<br />No minimum balance.<br />No surprises.</h1>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <div className="feature-item">
                    <img src="./icon-chat.png" alt="Chat Icon" className="feature-icon" />
                    <h3 className="feature-title">You are our priority</h3>
                    <p>
                        Need help? Our customer support team is available 24/7 to answer your questions and assist you
                        with anything you need.
                    </p>
                </div>
                <div className="feature-item">
                    <img src="./icon-money.png" alt="Money Icon" className="feature-icon" />
                    <h3 className="feature-title">More savings</h3>
                    <p>
                        The more you save, the more you earn. Enjoy high interest rates and personalized savings
                        programs that help you reach your financial goals faster.
                    </p>
                </div>
                <div className="feature-item">
                    <img src="./icon-security.png" alt="Security Icon" className="feature-icon" />
                    <h3 className="feature-title">Security first</h3>
                    <p>
                        Your security is our top priority. With advanced encryption and multi-factor authentication,
                        your money and personal information are always protected.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Home;