import React, { useState } from 'react';
import Filter from '../Filter';
import './style.css';
import icon from '../../icon.png';
import List from '../List';

const hospitalOptions = ['SEMUA', 'BPJS', 'Partner', 'Terdekat', 'Terlaris'];
const hospital = [
    {
        image: icon,
        id: 'BPJS',
        name: 'Rumah Sakit BPJS',
        address: 'Alamat Rumah Sakit',
        url: '/#',
    },
    {
        image: icon,
        id: 'Partner',
        name: 'Rumah Sakit Partner',
        address: 'Alamat Rumah Sakit',
        url: '/#',
    },
    {
        image: icon,
        id: 'Terdekat',
        name: 'Rumah Sakit Terdekat',
        address: 'Alamat Rumah Sakit',
        url: '/#',
    },
    {
        image: icon,
        id: 'Terlaris',
        name: 'Rumah Sakit Terlaris',
        address: 'Alamat Rumah Sakit',
        url: '/#',
    },
];

const clinicOptions = hospitalOptions.slice(0, 3);
const clinic = [
    {
        image: icon,
        id: 'BPJS',
        name: 'Nama Klinik BPJS',
        address: 'Alamat Klinik',
        url: '/#',
    },
    {
        image: icon,
        id: 'BPJS',
        name: 'Nama Klinik BPJS',
        address: 'Alamat Klinik',
        url: '/#',
    },
    {
        image: icon,
        id: 'Partner',
        name: 'Nama Klinik Partner',
        address: 'Alamat Klinik',
        url: '/#',
    },
];

export default function Content() {
    const [hospitals, setHospitals] = useState([
        {
            image: icon,
            id: 'BPJS',
            name: 'Rumah Sakit BPJS',
            address: 'Alamat Rumah Sakit',
            url: '/#',
        },
        {
            image: icon,
            id: 'Partner',
            name: 'Rumah Sakit Partner',
            address: 'Alamat Rumah Sakit',
            url: '/#',
        },
        {
            image: icon,
            id: 'Terdekat',
            name: 'Rumah Sakit Terdekat',
            address: 'Alamat Rumah Sakit',
            url: '/#',
        },
        {
            image: icon,
            id: 'Terlaris',
            name: 'Rumah Sakit Terlaris',
            address: 'Alamat Rumah Sakit',
            url: '/#',
        },
    ]);
    const [clinics, setKlilnik] = useState([
        {
            image: icon,
            id: 'BPJS',
            name: 'Nama Klinik BPJS',
            address: 'Alamat Klinik',
            url: '/#',
        },
        {
            image: icon,
            id: 'BPJS',
            name: 'Nama Klinik BPJS',
            address: 'Alamat Klinik',
            url: '/#',
        },
        {
            image: icon,
            id: 'Partner',
            name: 'Nama Klinik Partner',
            address: 'Alamat Klinik',
            url: '/#',
        },
    ]);

    const filterHospitals = (item) => {
        if (item === 'SEMUA') {
            setHospitals(hospital);
            return;
        }

        const filteredData = hospital.filter((product) => product.id === item);
        setHospitals(filteredData);
    };

    const filterClinics = (item) => {
        if (item === 'SEMUA') {
            setKlilnik(clinic);
            return;
        }

        const filteredData = clinic.filter((product) => product.id === item);
        setKlilnik(filteredData);
    };

    return (
        <div className='content'>
            <div className='header'>
                <span>Rumah Sakit</span>
                <a href='/#'>Lihat Semua</a>
            </div>
            <Filter options={hospitalOptions} handleFilter={filterHospitals} />
            <List items={hospitals} />

            <div className='banner'>
                <img
                    src='https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80'
                    alt='banner'
                    width='100%'
                    height='auto'
                    className='banner-image'
                />
                <img
                    src='https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                    alt='banner'
                    width='100%'
                    height='auto'
                    className='banner-image'
                />
            </div>
            <div className='header'>
                <span>Rumah Sakit</span>
                <a href='/#'>Lihat Semua</a>
            </div>

            <Filter options={clinicOptions} handleFilter={filterClinics} />
            <List items={clinics} />
        </div>
    );
}
