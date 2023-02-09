export default function Footer() {
    return (
        <div className="footer container-fluid py-4 px-0 bg-light">
            <div className="row row-wrap d-flex bg-primary">
                <div className="col-6 p-2 ">
                    <ul>
                        <li><h6>ارتباط با ما</h6></li>
                        <li>دفتر مرکزی: <i className="bi bi-map"></i></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="col-6">
                    <h6>نشان اعتماد</h6>
                </div>
                <div className="media d-flex justify-content-between">
                    <span>chat</span>
                    <div>
                        <span>instagram</span>
                        <span>telegram</span>
                        <span>whatsapp</span>
                    </div>
                </div>
            </div>
        </div>
    )
}