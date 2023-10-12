export default function Tokoh({data}) {
    return (
        <>
            <div className="container" id="tokoh">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center justify-content-lg-start">
                        <span className="fs-1 fw-bold">TOKOH</span>
                    </div>
                </div>
                {/* MOBILE */}
                <div className="row d-flex d-lg-none justify-content-center">
                    <div className="col-12 col-md-6">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide">
                            <div className="carousel-inner">
                                {data.map((tokoh, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <div className="card">
                                            <img src={tokoh.Image} style={{ height: '300px' }} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <div className="d-flex flex-column">
                                                    <span className="fs-5 fw-bold">{tokoh.Pemeran}</span>
                                                    <span className="fs-6 text-secondary">{tokoh.Nama}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* DESKTOP */}
                <div className="row d-none d-lg-flex">
                    {data.map((tokoh, index) => (
                        <div key={index} className="col-12 col-lg-3 col-md-4 d-flex justify-content-center mt-3">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={tokoh.Image} style={{ height: '325px' }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="d-flex flex-column">
                                        <span className="fs-5 fw-bold">{tokoh.Pemeran}</span>
                                        <span className="fs-6 text-secondary">{tokoh.Nama}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}