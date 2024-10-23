// src/components/Book.jsx
import React from 'react';

const Book = ({ id, jdlbuku, ISBN }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{jdlbuku}</td>
            <td>{ISBN}</td>
        </tr>
    );
};

export default Book;