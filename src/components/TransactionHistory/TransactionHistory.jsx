import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

import { Transactions, MainLine, NotMainLine} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <Transactions className={css.transactionHistory}>
            <thead>
                <tr>
                    <MainLine>Type</MainLine>
                    <MainLine>Amount</MainLine>
                    <MainLine>Currency</MainLine>
                </tr>
            </thead>

            <tbody>
                {
                    items.map(({id, type, amount, currency}) => (
                        <tr key={id}>
                            <NotMainLine>{type}</NotMainLine>
                            <NotMainLine>{amount}</NotMainLine>
                            <NotMainLine>{currency}</NotMainLine>
                        </tr>
                    ))
                }
                
            </tbody>
        </Transactions>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
}