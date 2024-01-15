import css from './TransactionHistory.module.css';
import { SecondaryTitle } from '../secondary-title/SecondaryTitle';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <SecondaryTitle title="Transactions" />
      <table className={css.transactionTable}>
        <caption className={css.tableTitle}>Transaction history</caption>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tableBody}>
          {items.map(({ id, amount, type, currency }) => {
            return (
              <tr key={id}>
                <td style={{ color: transactionColor(type) }}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

function transactionColor(type) {
  switch (type) {
    case 'withdrawal':
      return 'green';
    case 'deposit':
      return 'brown';
    case 'invoice':
      return 'red';
    case 'payment':
      return 'blue';
    default:
      throw new Error(`Unsupported type prop value - ${type}`);
  }
}
