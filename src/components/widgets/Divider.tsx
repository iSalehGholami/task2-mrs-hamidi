"use client";

import React from 'react';

interface DividerProps {
    width?: string;
    height?: string;
    color?: string;
    margin?: string;
}

const Divider: React.FC<DividerProps> = ({ width = '1px', height = '24px', color = 'black', margin = '0 8px' }) => {
    return (
        <div
            style={{
                width: width,
                height: height,
                backgroundColor: color,
                margin: margin
            }}
        />
    );
};

export default Divider;
