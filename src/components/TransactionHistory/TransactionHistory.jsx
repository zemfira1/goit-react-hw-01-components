import css from "./TransactionHistory.module.css"
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.itemOfTitle}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={css.transactionList}>
                {
                    items.map(item => (
                        <tr className={css.item} key={item.id}>
                            <td className={css.type}>{item.type}</td>
                            <td className={css.amount}>{item.amount}</td>
                            <td className={css.currency}>{item.currency}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
}