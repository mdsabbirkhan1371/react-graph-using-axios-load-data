import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChats = () => {

    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadData = data.data.data;
                const phoneData = loadData.map(phone => {
                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        value: parseInt(parts[1])
                    };
                    return ph;
                });
                setPhones(phoneData)



            })
    }, [])

    return (
        <BarChart width={730} height={250} data={phones}>
            <Bar dataKey="name" fill="#8884d8" />
            <Bar dataKey="value" fill="#8884d8" />
            <XAxis dataKey={'name'}></XAxis>
            <YAxis dataKey={'value'}></YAxis>
            <Tooltip></Tooltip>
        </BarChart>
    );
};

export default SpecialChats;