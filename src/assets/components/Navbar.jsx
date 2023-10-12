export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Petualangan Sherina 2</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#root">Sinopsis</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#tokoh">Tokoh</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#dimensi">Dimensi P5</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}