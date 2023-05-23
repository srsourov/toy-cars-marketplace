import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CarCard from './CarCard';
const ShopByCategory = () => {

    const [cars, setCars] = useState([]);

    const loadCars = (id) => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then(res => res.json())
            .then(data => setCars(data))

    }
    useEffect(() => {
        fetch(`http://localhost:5000/cars/1`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])


    return (
        <div className='my-12'>
            <div className="text-center">
                <h1 className="text-5xl font-bold mt-8 mb-8">Shop by category</h1>
            </div>
            <div className='text-center'>
                <Tabs>
                    <TabList className="border-none mb-4">
                        <Tab onClick={() => loadCars("1")} style={{ backgroundColor: "#570DF8", borderRadius: "0px", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}> Racing Cars</Tab>
                        <Tab onClick={() => loadCars("4")} style={{ backgroundColor: "#570DF8", borderRadius: "0px", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}> Off-Road Vehicles</Tab>
                        <Tab onClick={() => loadCars("7")} style={{ backgroundColor: "#570DF8", borderRadius: "0px", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}> Classic Cars</Tab>
                    </TabList>

                    <TabPanel>
                        <Tabs>
                            <TabList>
                                <Tab onClick={() => loadCars("1")} style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Formula 1 Cars</Tab>
                                <Tab onClick={() => loadCars("2")} style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Sports Cars</Tab>
                                <Tab onClick={() => loadCars("3")} style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Rally Cars</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto my-8">
                                    {
                                        cars.map(car => <CarCard
                                            key={car._id}
                                            car={car}
                                        ></CarCard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto my-8">
                                    {
                                        cars.map(car => <CarCard
                                            key={car._id}
                                            car={car}
                                        ></CarCard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto my-8">
                                    {
                                        cars.map(car => <CarCard
                                            key={car._id}
                                            car={car}
                                        ></CarCard>)
                                    }
                                </div>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <TabList>
                                <Tab onClick={() => loadCars("4")} style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Monster Trucks</Tab>
                                <Tab onClick={() => loadCars("5")} style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>SUVs and Jeeps</Tab>
                                <Tab onClick={() => loadCars("6")} style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Buggy Cars</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto my-8">
                                    {
                                        cars.map(car => <CarCard
                                            key={car._id}
                                            car={car}
                                        ></CarCard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto my-8">
                                    {
                                        cars.map(car => <CarCard
                                            key={car._id}
                                            car={car}
                                        ></CarCard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto my-8">
                                    {
                                        cars.map(car => <CarCard
                                            key={car._id}
                                            car={car}
                                        ></CarCard>)
                                    }
                                </div>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <TabList>
                                <Tab onClick={() => loadCars("7")} style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Vintage Cars</Tab>
                                <Tab onClick={() => loadCars("8")} style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Retro Muscle Cars</Tab>
                                <Tab onClick={() => loadCars("9")} style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Antique Cars</Tab>
                            </TabList>

                            <TabPanel>
                            <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto my-8">
                                    {
                                        cars.map(car => <CarCard
                                            key={car._id}
                                            car={car}
                                        ></CarCard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto my-8">
                                    {
                                        cars.map(car => <CarCard
                                            key={car._id}
                                            car={car}
                                        ></CarCard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto my-8">
                                    {
                                        cars.map(car => <CarCard
                                            key={car._id}
                                            car={car}
                                        ></CarCard>)
                                    }
                                </div>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;