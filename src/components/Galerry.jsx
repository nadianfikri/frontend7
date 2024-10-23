import { GetImage } from "./GetImage";
export default function Galerry() {
    return (
        <div>
            <h1>Ilmuan terkenal</h1>
            <section className="profil">
                <h2>Maria Skydowsky-curie</h2>
                <img 
                    className="avatar"
                    src={GetImage('szV5sdG')}
                    alt="Maria Skydowsky-curie"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>profesi: </b>
                        fisikawan dan ahli kimia
                    </li>
                    <li>
                        <b>Penghargaan: 2 </b>
                        (Hadiah nobel fisika, Hadiah nobel kimia)
                    </li>
                    <li>
                        <b>penemuan: </b>
                        polonium (unsur kimia)
                    </li>
                </ul>
            </section>
            <section className="profil">
                <h2>Katsuko Saruhashi</h2>
                <img 
                    className="avatar"
                    src={GetImage('')}
                    alt="Katsuko Sarushi"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>prifesi: </b>
                        Ahli Geokimia
                    </li>
                    <li>
                        <b>Penghargaan: </b>
                        (Hadiah Miyake takagawa, Hadiah tanaka)
                    </li>
                    <li>
                        <b>Penemuan: </b>
                        metode untuk mengukur karbon dioksida
                    </li>
                </ul>
            </section>
        </div>
    )
}