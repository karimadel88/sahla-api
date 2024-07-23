import { Request, Response, Restful, RouteResource, t } from "@warlock.js/core";
import walletsRepository from "app/wallets/repositories/wallets-repository";
import { WalletTransactionType } from "../utils/types";
import { WalletTransaction } from "./../models/wallet-transaction";
import walletTransactionsRepository from "./../repositories/wallet-transactions-repository";

class RestfulWalletTransactions
  extends Restful<WalletTransaction>
  implements RouteResource
{
  cache: boolean = false;
  /**
   * {@inheritDoc}
   */
  protected repository = walletTransactionsRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        wallet: ["int", "required"],
        date: ["date"],
        amount: ["number", "required"],
        type: ["required", "in:deposit,withdrawal"],
        comment: ["string"],
      },
    },
  };

  protected async beforeSave(
    request: Request<any>,
    _response: Response,
    _record: WalletTransaction,
  ) {
    const amount = request.number("amount");
    const walletId = request.int("wallet");

    const wallet = await walletsRepository.first({
      id: walletId,
    });

    if (!wallet) {
      throw new Error(t("wallets.notFound"));
    }

    const type = request.string("type");

    if (type === WalletTransactionType.DEPOSIT) {
      const remainingDeposit = wallet.number("remainingDeposit");

      if (remainingDeposit < amount) {
        throw new Error(t("wallets.insufficientRemainingDepositLimit"));
      }

      await wallet.save({
        remainingDeposit: remainingDeposit - amount,
        balance: wallet?.get("balance") + amount,
      });
    } else if (type === WalletTransactionType.WITHDRAWAL) {
      const remainingWithdrawal = wallet?.get("remainingWithdrawal");
      const balance = wallet.number("balance");

      if (remainingWithdrawal < amount) {
        throw new Error(t("wallets.insufficientRemainingWithdrawalLimit"));
      }

      if (balance < amount) {
        throw new Error(t("wallets.insufficientBalance"));
      }

      await wallet.save({
        remainingWithdrawal: remainingWithdrawal - amount,
        balance: balance - amount,
      });
    }
  }
}
const restfulWalletTransactions = new RestfulWalletTransactions();
export default restfulWalletTransactions;
