import { groupedTranslations } from "@mongez/localization";

groupedTranslations("wallets", {
  wallets: {
    en: "English Translation",
    ar: "Arabic Translation",
  },
  insufficientRemainingDepositLimit: {
    en: "Insufficient remaining deposit limit",
    ar: "خارج ليميت الدفع",
  },
  insufficientRemainingWithdrawalLimit: {
    en: "Insufficient remaining withdrawal limit",
    ar: "خارج ليميت السحب",
  },
  insufficientBalance: {
    en: "Insufficient balance",
    ar: "رصيد غير كافي",
  },
  notFound: {
    en: "Wallet not found",
    ar: "المحفظة غير موجودة",
  },
  cannotDeleteWalletWithTransactions: {
    en: "Cannot delete wallet with transactions",
    ar: "هناك عمليات مرتبطة بهذه المحفظة قم بحفظهم أولا",
  },
});
