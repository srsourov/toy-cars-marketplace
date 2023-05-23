import GallerySection from "./GallerySection";
import Hero from "./Hero";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
    
    return (
        <div>

            <Hero></Hero>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <div className="hero h-[300px] rounded-md" style={{ backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5403a7d0e4b0e9cf18a425fa/1590425083131-774XGT02P3SBSZ5T9CJE/banner.2.jpg?format=1000w")` }}>
                <div className="hero-overlay bg-opacity-80 bg-black rounded-md"></div>
                <div className="hero-content text-center text-neutral-content rounded-md">
                    <div className="max-w-[600px]">
                        <h1 className="mb-5 text-4xl font-bold">Get The Most Hyped Car Models In The Toy Car Market</h1>
                    </div>
                </div>
            </div>
            <div className="hero min-h-[500px] bg-base-200 my-12">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="w-6/12">
                        <img src="https://static-01.daraz.com.bd/p/0307a5d1da1082cd9e83b88497cb4cfd.jpg" className="max-w-sm mx-auto rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-5/12">
                        <h1 className="text-5xl font-bold">The Burning Royce!</h1>
                        <p className="py-6">Rolls-Royce is a prestigious British luxury car manufacturer known for producing some of the most luxurious and elegant automobiles in the world. </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;