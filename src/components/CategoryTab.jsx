import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BidPostCard from './BidPostCard';

const CategoryTab = ({ posts }) => {

    return (
        <div className='flex justify-center items-center'>
            <Tabs>
                <div className='flex justify-center items-center'>
                    <TabList>
                        <Tab>Fridge</Tab>
                        <Tab>Television</Tab>
                        <Tab>Motor Bike</Tab>
                        <Tab>Bike</Tab>
                        <Tab>Car</Tab>
                        <Tab>Ac</Tab>
                        <Tab>Mobile</Tab>
                        <Tab>Computer</Tab>
                        <Tab>Furniture</Tab>
                        <Tab>Properties</Tab>
                        <Tab>Others</Tab>
                        <Tab>All</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.filter(p => p.category === 'Fridge').map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.filter(p => p.category === 'Television').map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.filter(p => p.category === 'Motor Bike').map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.filter(p => p.category === 'Bike').map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.filter(p => p.category === 'Car').map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.filter(p => p.category === 'Ac').map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.filter(p => p.category === 'Mobile').map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.filter(p => p.category === 'Computer').map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.filter(p => p.category === 'Furniture').map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.filter(p => p.category === 'Properties').map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.filter(p => p.category === 'Others').map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                        {
                            posts?.map(post => (
                                <BidPostCard key={post._id} post={post} />
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;