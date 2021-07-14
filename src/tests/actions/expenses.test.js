import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('expense can be removed', () => {
   const action = removeExpense('123');
   expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123'
   });
});