import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { PiAirplaneTiltFill } from "react-icons/pi";
const AirportDropdown = ({ value, onSelect }) => {
    const fly_list = [
        { code: 'SGN', name: 'Sân bay Tân Sơn Nhất', location: 'TP HCM, Việt Nam' },
        { code: 'HAN', name: 'Sân bay Nội Bài', location: 'Hà Nội, Việt Nam' },
        { code: 'ĐA', name: 'Sân bay Đà Nẵng', location: 'Đà Nẵng, Việt Nam' },
        { code: 'HUI', name: 'Sân bay quốc tế Phú Bài', location: 'Huế, Việt Nam' },
        { code: 'H', name: 'Sân bay quốc tế Phú Bài', location: 'Huế, Việt Nam' },
        { code: 'UI', name: 'Sân bay quốc tế Phú Bài', location: 'Huế, Việt Nam' },
        { code: 'HI', name: 'Sân bay quốc tế Phú Bài', location: 'Huế, Việt Nam' },
        { code: 'HU', name: 'Sân bay quốc tế Phú Bài', location: 'Huế, Việt Nam' },
    ];

    const [showDropdown, setShowDropdown] = useState(false);

    const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const highlightText = (text, search) => {
        if (!search) return text; // Nếu không có giá trị tìm kiếm, trả về văn bản gốc
        const regex = new RegExp(`(${search})`, 'gi'); // Tạo regex để tìm kiếm không phân biệt chữ hoa chữ thường
        const parts = text.split(regex); // Chia văn bản thành các phần

        return parts.map((part, index) =>
            normalizeString(part) === normalizeString(search) ?
                <span key={index} style={{ color: '#0194F3' }}>{part}</span> :
                part
        );
    };
    // Lọc danh sách sân bay dựa trên giá trị nhập
    const filteredAirports = fly_list.filter(airport =>
        normalizeString(airport.name).includes(normalizeString(value)) ||
        normalizeString(airport.code).includes(normalizeString(value)) ||
        normalizeString(airport.location).includes(normalizeString(value))
    );

    const handleSelectAirport = (airport) => {
        onSelect(`${airport.location.split(',')[0].trim()} (${airport.code})`); // Gửi tên sân bay đã chọn ra ngoài
        setShowDropdown(false); // Ẩn dropdown sau khi chọn
    };

    return (
        <div className="absolute flex-col w-600 mt-1 h-max bg-white border rounded shadow-lg text-black font-medium  ">
            <div className='p-2 border-b-2'> Thành phố hoặc sân bay phổ biến</div>
            <ul className="min-w-min z-10  w-full max-h-64 overflow-y-auto">
                {filteredAirports.map((airport) => (
                    <li
                        key={airport.code}
                        onClick={() => handleSelectAirport(airport)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        <PiAirplaneTiltFill />
                        <div>
                            {highlightText(airport.name, value)}
                            <span className=''> {highlightText(airport.code, value)}</span>
                        </div>
                        <div>
                            {highlightText(airport.location, value)}
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
};


AirportDropdown.propTypes = {
    value: PropTypes.string.isRequired, // value phải là string và là bắt buộc
    onSelect: PropTypes.func.isRequired, // onSelect phải là function và là bắt buộc
};
export default AirportDropdown;
