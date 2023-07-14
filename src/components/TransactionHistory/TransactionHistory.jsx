
import PropTypes from 'prop-types';

import { Transactions, MainLine, NotMainLine, OneLine} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <Transactions>
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
                        <OneLine key={id}>
                            <NotMainLine>{type}</NotMainLine>
                            <NotMainLine>{amount}</NotMainLine>
                            <NotMainLine>{currency}</NotMainLine>
                        </OneLine>
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