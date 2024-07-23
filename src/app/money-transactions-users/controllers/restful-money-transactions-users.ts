import { Request, Response, Restful, RouteResource, t } from "@warlock.js/core";
import moneyTransactionsRepository from "app/money-transactions/repositories/money-transactions-repository";
import { MoneyTransactionsUser } from "./../models/money-transactions-user";
import moneyTransactionsUsersRepository from "./../repositories/money-transactions-users-repository";

class RestfulMoneyTransactionsUsers
  extends Restful<MoneyTransactionsUser>
  implements RouteResource
{
  cache: boolean = false;
  /**
   * {@inheritDoc}
   */
  protected repository = moneyTransactionsUsersRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {},
    },
  };

  protected async beforeDelete(
    _request: Request<any>,
    _response: Response,
    record: MoneyTransactionsUser,
  ) {
    const moneyTransactionId = record.id;

    const transactions = await moneyTransactionsRepository.count({
      moneyTransactionUser: moneyTransactionId,
    });

    if (transactions > 0) {
      throw new Error(
        t(
          "moneyTransactionsUsers.cannotDeleteMoneyTransactionWithTransactions",
        ),
      );
    }
  }
}

const restfulMoneyTransactionsUsers = new RestfulMoneyTransactionsUsers();
export default restfulMoneyTransactionsUsers;
