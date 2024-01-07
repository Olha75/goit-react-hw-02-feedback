import { Component } from 'react';
import css from './statistics.module.css';
// import PropTypes from 'prop-types';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    const percent = (good / total) * 100;
    return percent;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback;
    const percent = this.countPositiveFeedbackPercentage(good);

    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>кафе Expresso</h1>
        <p className={css.itemTitle}>
          <b>Чи подобається Вам наше кафе?</b>
        </p>
        <ul className={css.listButton}>
          <li>
            <button className={css.button}>good</button>
          </li>
          <li>
            <button className={css.button}>neutral</button>
          </li>
          <li>
            <button className={css.button}>bad</button>
          </li>
        </ul>
        <h3 className={css.statisticsTitle}>Статистика</h3>
        <ul className={css.listStatistics}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total:{total}</li>
          <li>Percent:{percent}</li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
