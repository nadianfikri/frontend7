// const books = [
//     { id: 1, jdlbuku: "Express.js1", ISBN: 122 },
//     { id: 2, jdlbuku: "Express.js2", ISBN: 223},
//     { id: 3, jdlbuku: "Express.js3", ISBN: 334},
// ];

// export default function RenderingList() {
//     const listBook = books.map((buku) => (
//         <ul>
//             <li>
//                 {/*tampilkan data buku */}
//                 ID={buku.id} judul buku={buku.jdlbuku} ISBN={buku.ISBN} 
//             </li>
//         </ul>
//     ));

//     return <ul>{listBook}</ul>
// }
// src/components/RenderingList.jsx
import React from 'react';
import Book from './Book';

const books = [
    { id: 1, jdlbuku: "Express.js1", ISBN: 111 },
    { id: 2, jdlbuku: "Express.js2", ISBN: 222 },
    { id: 3, jdlbuku: "Express.js3", ISBN: 333 },
];

export default function RenderingList() {
    const listBook = books.map((buku) => (
        <Book key={buku.id} id={buku.id} jdlbuku={buku.jdlbuku} ISBN={buku.ISBN} />
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Judul Buku</th>
                    <th>ISBN</th>
                </tr>
            </thead>
            <tbody>
                {listBook}
            </tbody>
        </table>
    );
}
