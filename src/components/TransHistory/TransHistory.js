import React from "react";
// import PropTypes from "prop-types";
import styles from "./TransHistory.module.scss";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.trans_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map((item) => (
        <tbody key={item.id} className={styles.line}>
          <tr>
            <td className={styles.typeTrans}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistory;
