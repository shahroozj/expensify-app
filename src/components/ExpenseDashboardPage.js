import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () =>(
    <div>
      This is dashboard of the application
      <ExpenseListFilters />
      <ExpenseList />
      <ExpensesSummary />
    </div>
)

export default ExpenseDashboardPage;