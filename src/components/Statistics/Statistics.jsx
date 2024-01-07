import { Component } from 'react';
import css from './statistics.module.css';
// import PropTypes from 'prop-types';

class Statistics extends Component {
  // static defaultProps = {};

  // static propTypes = {};

  render() {
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
      </div>
    );
  }
}

export default Statistics;
