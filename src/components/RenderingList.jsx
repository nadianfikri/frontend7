const books = [
    { id: 1, jdlbuku: "Express.js1", ISBN: 122 },
    { id: 2, jdlbuku: "Express.js2", ISBN: 223},
    { id: 3, jdlbuku: "Express.js3", ISBN: 334},
];

export default function RenderingList() {
    const listBook = books.map((buku) => (
        <ul>
            <li>
                {/*tampilkan data buku */}
                ID={buku.id} judul buku={bukujdlbuku} ISBN={buku.ISBN} 
            </li>
        </ul>
    ));

    return <ul>{listBook}</ul>
}