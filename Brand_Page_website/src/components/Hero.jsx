const HeroSection = () => {
    return(
    <main className="hero container">
        <div className="hero-content"></div>
        <h1>
        Visa, a trusted leader in digital payments.
        </h1>
        <p>
        We’re a world-leading digital payments network that removes barriers and connects people to the global economy. We aim to uplift everyone, everywhere by being the best way to pay and be paid.
        </p>

        <div className="hero-button">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icons">
            <img src="/images/amazon100.png" alt="amazon-logo"></img>
            <img src="/images/ebay100.png" alt="ebay-logo"></img>
            </div>

        </div>

        <div className="hero-image"></div>
        <img src="/images/Money.png" alt="money-logo" class="money-logo"></img>

    </main>
    );
}

export default HeroSection;