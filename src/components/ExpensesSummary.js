import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from './../selectors/expenses';
import selectExpensesTotal from './../selectors/expenses-total';

export const ExpensesSummary = ({
  expenseCount,
  expensesTotal,
  allExpenses,
  allExpensesTotal
}) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{expenseCount}</span>{' '}
        {expenseCount === 1 ? 'expense' : 'expenses'} totalling{' '}
        <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
      </h1>
      <h4 className="page-header__title">
        Out of {allExpenses} totalling{' '}
        {numeral(allExpensesTotal / 100).format('$0,0.00')}
      </h4>
      <div className="page-header__actions">
        <Link className="button" to="/create">
          Add Expense
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    allExpenses: state.expenses.length,
    allExpensesTotal: selectExpensesTotal(state.expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
