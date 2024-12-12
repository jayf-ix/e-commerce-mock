

const SideBar = () => {
   
    return (
        <div className="d-flex flex-column bg-light p-4">
            <h5 className="mb-3">Filters</h5>

            {/* Active Filters */}
            <div className="mb-4">
                <h6>Active Filters</h6>
                <div className="mb-2">
                    <span className="badge bg-secondary me-2">Lube-Tech</span>
                    <span className="badge bg-secondary me-2">Hydraulic Fluid</span>
                    <span className="badge bg-secondary">16 Gal Keg</span>
                </div>
                <a href="#" className="text-danger text-decoration-none">Clear All</a>
            </div>

            {/* Collapsible Filter Sections */}
            <div className="accordion" id="filtersAccordion">

                {/* Brand Section */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="brandHeading">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#brandCollapse"
                            aria-expanded="true"
                            aria-controls="brandCollapse"
                        >
                            Brand
                        </button>
                    </h2>
                    <div
                        id="brandCollapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="brandHeading"
                    >
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="mobil" />
                                <label className="form-check-label" htmlFor="mobil">
                                    Mobil
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="oldWorld" />
                                <label className="form-check-label" htmlFor="oldWorld">
                                    Old World
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="peak" />
                                <label className="form-check-label" htmlFor="peak">
                                    Peak
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Viscosity Section */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="viscosityHeading">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#viscosityCollapse"
                            aria-expanded="false"
                            aria-controls="viscosityCollapse"
                        >
                            Viscosity
                        </button>
                    </h2>
                    <div
                        id="viscosityCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="viscosityHeading"
                    >
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="0w20" />
                                <label className="form-check-label" htmlFor="0w20">
                                    0W-20
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="5w30" />
                                <label className="form-check-label" htmlFor="5w30">
                                    5W-30
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="10w40" />
                                <label className="form-check-label" htmlFor="10w40">
                                    10W-40
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Size Section */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="sizeHeading">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#sizeCollapse"
                            aria-expanded="false"
                            aria-controls="sizeCollapse"
                        >
                            Size
                        </button>
                    </h2>
                    <div
                        id="sizeCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="sizeHeading"
                    >
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="1quart" />
                                <label className="form-check-label" htmlFor="1quart">
                                    1 Quart
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="5quarts" />
                                <label className="form-check-label" htmlFor="5quarts">
                                    5 Quarts
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="1gallon" />
                                <label className="form-check-label" htmlFor="1gallon">
                                    1 Gallon
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
