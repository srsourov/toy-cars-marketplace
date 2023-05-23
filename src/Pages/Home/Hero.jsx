import bannerImg from "../../assets/banner.png"

const Hero = () => {
    return (
        <div className="hero h-[600px] rounded-lg mb-4" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay rounded-lg bg-opacity-80 bg-slate-950"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-[600px]">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to</h1>
                    <h1 className="mb-5 text-5xl font-bold">Toy Cars Marketplace</h1>
                    <p className="mb-5">Rev up your imagination and explore endless adventures with our wide selection of toy cars. Discover the joy of racing, collecting, and playing with the finest toy cars from around the world.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;