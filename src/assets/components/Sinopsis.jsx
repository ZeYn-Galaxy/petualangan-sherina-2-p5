export default function Sinopsis(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-block col-lg-6 d-lg-none animate__animated animate__fadeInLeft">
                        <span className="fw-bold fs-1">Sinopsis</span>
                        <p>
                            Petualangan Sherina 2 menceritakan dua tokoh utama yaitu Sherina (Sherina) dan Sadam (Derby
                            Romero)
                            yang telah lama berpisah sejak kecil. Akhirnya mereka bedua dipertemukan kembali di hutan hujan
                            tropis dan akan memulai berpetualang menghadapi rintangan yang menghadang.&nbsp;
                            <a className="lg-hidden" data-bs-toggle="collapse" href="#sinopsis" role="button" aria-expanded="false"
                                aria-controls="sinopsis">
                                Selengkapnya...
                            </a>
                        </p>

                        <div className="collapse" id="sinopsis">
                            <p>
                                Sherina merupakan seorang wartawan yang ditugaskan untuk meliput ekonomi di Swiss. Namun,
                                keputusan
                                itu berubah dan mengharuskan Sherina melakukan liputan di hutan tentang masalah lingkungan hidup
                                di
                                pulau Kalimantan.
                            </p>
                            <p>
                                Saat Sherina bersiap-siap mengemasi barangnya, ia mulai bernostalgia akan kenangan masa
                                kecilnya.
                                Setelah tiba di lokasi LSM, Sherina disapa oleh manajer LSM yang ternyata itu adalah Sadam,
                                teman
                                masa kecilnya.
                            </p>
                            <p>
                                Namun terdapat masalah yang datang ketika mereka tahu terdapat sekelompok kriminal yang
                                mencuri
                                orangutan dari hutan. Dari sini Sherina dan Sadam bersatu kembali untuk menyelamatkan
                                orangutan
                                yang
                                telah di curi tersebut.
                                <br />
                                <a className="fst-italic"
                                    href="https://www.detik.com/jatim/budaya/d-6956328/sinopsis-petualangan-sherina-2-sekuel-itu-akhirnya-ada-setelah-23-tahun" target="_blank">Source:
                                    https://www.detik.com/jatim</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-12 d-none col-lg-6 d-lg-block animate__animated animate__fadeInLeft">
                        <span className="fw-bold fs-1">Sinopsis</span>
                        <p>
                            Petualangan Sherina 2 menceritakan dua tokoh utama yaitu Sherina (Sherina) dan Sadam (Derby
                            Romero)
                            yang telah lama berpisah sejak kecil. Akhirnya mereka bedua dipertemukan kembali di hutan hujan
                            tropis dan akan memulai berpetualang menghadapi rintangan yang menghadang.&nbsp;
                        </p>
                        <p>
                            Sherina merupakan seorang wartawan yang ditugaskan untuk meliput ekonomi di Swiss. Namun,
                            keputusan
                            itu berubah dan mengharuskan Sherina melakukan liputan di hutan tentang masalah lingkungan hidup
                            di
                            pulau Kalimantan.
                        </p>
                        <p>
                            Saat Sherina bersiap-siap mengemasi barangnya, ia mulai bernostalgia akan kenangan masa
                            kecilnya.
                            Setelah tiba di lokasi LSM, Sherina disapa oleh manajer LSM yang ternyata itu adalah Sadam,
                            teman
                            masa kecilnya.
                        </p>
                        <p>
                            Namun terdapat masalah yang datang ketika mereka tahu terdapat sekelompok kriminal yang
                            mencuri
                            orangutan dari hutan. Dari sini Sherina dan Sadam bersatu kembali untuk menyelamatkan
                            orangutan
                            yang
                            telah di curi tersebut.
                            <br />
                            <a className="fst-italic"
                                href="https://www.detik.com/jatim/budaya/d-6956328/sinopsis-petualangan-sherina-2-sekuel-itu-akhirnya-ada-setelah-23-tahun" target="_blank">Source:
                                https://www.detik.com/jatim</a>
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end animate__animated animate__fadeInRight">
                        <img className="img-fluid rounded-3" src={props.Thumbnail} alt="image tidak load" />
                    </div>
                </div>
            </div>

        </>
    )
}