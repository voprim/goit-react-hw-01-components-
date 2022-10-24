import PropTypes from 'prop-types';
//import css from './TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
    return <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
};

TransactionHistoryItem.propTypes = {
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
};