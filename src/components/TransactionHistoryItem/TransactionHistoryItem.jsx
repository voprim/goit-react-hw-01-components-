import PropTypes from 'prop-types';
//import css from './TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
    return <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
};