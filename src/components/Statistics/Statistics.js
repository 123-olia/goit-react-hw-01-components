import React from "react";
// import PropTypes from "prop-types";
import styles from "./Statistics.module.scss";

const Stats = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <div className={styles.wrapper}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
          {stats.map((stat) => (
            <li className={styles.item} key={stat.id}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;

// Stats.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf({
//     label: PropTypes.string,
//     percentage: PropTypes.number,
//   }),
// };

Stats.defaultProps = {
  title: "",
  stats: {
    label: "",
    percentage: 0,
  },
};
