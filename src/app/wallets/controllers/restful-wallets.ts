import { Request, Response, Restful, RouteResource, t } from "@warlock.js/core";
import walletTransactionsRepository from "app/wallet-transactions/repositories/wallet-transactions-repository";
import { Wallet } from "./../models/wallet";
import walletsRepository from "./../repositories/wallets-repository";

class RestfulWallets extends Restful<Wallet> implements RouteResource {
  cache: boolean = false;

  /**
   * {@inheritDoc}
   */
  protected repository = walletsRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {
        isActive: ["boolean"],
        wallet: ["int", "required"],
        withdrawalAmount: ["number", "required"],
        depositAmount: ["number", "required"],
        owner: ["int", "required"],
      },
    },
  };

  protected async beforeCreate(
    request: Request<any>,
    _response: Response,
    record: Wallet,
  ) {
    const { withdrawalAmount, depositAmount } = request.only([
      "withdrawalAmount",
      "depositAmount",
    ]);
    record.set("remainingDeposit", withdrawalAmount);
    record.set("remainingWithdrawal", depositAmount);
  }

  protected async beforeDelete(
    _request: Request<any>,
    _response: Response,
    record: Wallet,
  ) {
    const walletId = record.id;

    const transactions = await walletTransactionsRepository.count({
      wallet: walletId,
    });

    if (transactions > 0) {
      throw new Error(t("wallets.cannotDeleteWalletWithTransactions"));
    }
  }
}

const restfulWallets = new RestfulWallets();
export default restfulWallets;
