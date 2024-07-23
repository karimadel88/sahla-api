import { MoneyTransaction } from "app/money-transactions/models/money-transaction";
import { MoneyTransactionsUser } from "../models/money-transactions-user";
import moneyTransactionsUsersRepository from "../repositories/money-transactions-users-repository";

MoneyTransaction.events()
  .onSaved(onCreatedUserTransaction)
  .onDeleted(onCreatedUserTransaction);

async function onCreatedUserTransaction(moneyTransaction: MoneyTransaction) {
  const user = moneyTransaction.get("user.id");

  const totalRemaining = await MoneyTransaction.aggregate()
    .where("type", "remaining")
    .where("user.id", user)
    .sum("amount");

  const totalDept = await MoneyTransaction.aggregate()
    .where("type", "dept")
    .where("user.id", user)
    .sum("amount");

  const difference = totalRemaining - totalDept;

  const differenceType = difference < 0 ? "dept" : "remaining";

  let moneyTransactionUser = await moneyTransactionsUsersRepository.first({
    user,
  });

  if (!moneyTransactionUser) {
    moneyTransactionUser = new MoneyTransactionsUser();
  }

  await moneyTransactionUser.save({
    user: user,
    totalRemaining: totalRemaining,
    totalDept: totalDept,
    difference: Math.abs(difference),
    differenceType: differenceType,
  });

  await moneyTransaction.silentSaving({
    moneyTransactionUser: moneyTransactionUser.embeddedData,
  });
}
