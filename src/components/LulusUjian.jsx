function Mahasiswa({ nama, lulus}){
    if (lulus) {
        return (
            <li className="Mahasiswa">
                {nama} <strong>Lulus</strong>
            </li>
        );
    }
    return (
        <li className="Mahasiswa">
            {nama}
            <strong>Tidak lulus</strong>
        </li>
    )
}

export default function LulusUjian() {
    return (
        <section>
            <h1>Daftar Nama Mahasiswa</h1>
            <ul>
                <Mahasiswa lulus={true} nama="nadian fiqri" />
                <Mahasiswa lulus={true} nama="fakhri" />
                <Mahasiswa lulus={false} nama="cahyo" />
                <Mahasiswa lulus={false} nama="reza" />
            </ul>
        </section>
    )
}