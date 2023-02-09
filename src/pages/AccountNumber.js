import styles from '../styles/accnumbers.module.scss';

export default function AcNumber () {
    const accountNumbers = [
        {bank : 'سپه', accountType : "جاری", place: "دادمان", placeCode: "1234", accountNumber : "128888801", description : "tozihat............."}
    ]
    const handleCopy = async(text) => {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }
    return (
        <div className="container">
            <div className={styles.accnumbers}>
                <table className="table-responsive table-bordered mx-auto w-75">
                    <thead>
                        <tr>
                            <th>بانک</th>
                            <th>نوع حساب</th>
                            <th>شعبه</th>
                            <th>کدشعبه</th>
                            <th>شماره حساب</th>
                            <th>توضیحات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            accountNumbers.map(number => {
                                return (
                                    <tr>
                                        <td>{number.bank}</td>
                                        <td>{number.bankType}</td>
                                        <td>{number.place}</td>
                                        <td>{number.placeCode}</td>
                                        <td className="accnum" title="copy" onClick={() => handleCopy(number.accountNumber)}>{number.accountNumber}</td>
                                        <td>{number.description}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}