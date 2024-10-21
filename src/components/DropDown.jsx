import React, { useState } from 'react';

const AirportDropdown = ({ onSelect }) => {
    const fly_list = [
        { code: 'SGN', name: 'Sân bay Tân Sơn Nhất', location: 'TP HCM, Việt Nam' },
        { code: 'HAN', name: 'Sân bay Nội Bài', location: 'Hà Nội, Việt Nam' },
        { code: 'ĐA', name: 'Sân bay Đà Nẵng', location: 'Đà Nẵng, Việt Nam' },
        { code: 'HUI', name: 'Sân bay quốc tế Phú Bài', location: 'Hà Nội, Việt Nam' },
    ];

    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedAirport, setSelectedAirport] = useState('');

    const handleSelectAirport = (airport) => {
        setSelectedAirport(airport.name);
        setShowDropdown(false);
        // Gọi hàm onSelect để gửi giá trị đã chọn ra bên ngoài component
        if (onSelect) {
            onSelect(airport);  // Trả về đối tượng airport (cả code, name, location)
        }
    };

    return (
        <div className="relative w-64">
            <input
                type="text"
                className="border w-full px-4 py-2 rounded"
                value={selectedAirport}
                placeholder="Chọn sân bay"
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                readOnly
            />

            {showDropdown && (
                <ul className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg">
                    {fly_list.map((airport) => (
                        <li
                            key={airport.code}
                            onClick={() => handleSelectAirport(airport)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {airport.name} ({airport.location})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AirportDropdown;
