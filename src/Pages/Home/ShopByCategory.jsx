import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopByCategory = () => {



    return (
        <div className='my-12'>
            <div className="text-center">
                <h1 className="text-5xl font-bold mt-8 mb-8">Shop by category</h1>
            </div>
            <div className='text-center'>
                <Tabs>
                    <TabList className="border-none mb-4">
                        <Tab style={{ backgroundColor: "#570DF8", borderRadius: "0px", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}> Racing Cars</Tab>
                        <Tab style={{ backgroundColor: "#570DF8", borderRadius: "0px", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}> Off-Road Vehicles</Tab>
                        <Tab style={{ backgroundColor: "#570DF8", borderRadius: "0px", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}> Classic Cars</Tab>
                    </TabList>

                    <TabPanel>
                        <Tabs>
                            <TabList>
                                <Tab style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Formula 1 Cars</Tab>
                                <Tab style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Sports Cars</Tab>
                                <Tab style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Rally Cars</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>Any content 1</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 3</h2>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <TabList>
                                <Tab style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Monster Trucks</Tab>
                                <Tab style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>SUVs and Jeeps</Tab>
                                <Tab style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Buggy Cars</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>Any content 1</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 3</h2>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <TabList>
                                <Tab style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Vintage Cars</Tab>
                                <Tab style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Retro Muscle Cars</Tab>
                                <Tab style={{ backgroundColor: "#7C3DFF", color: "#ffffff", margin: "0 10px", padding: "10px 20px" }}>Antique Cars</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>Any content 1</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 3</h2>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                  
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;