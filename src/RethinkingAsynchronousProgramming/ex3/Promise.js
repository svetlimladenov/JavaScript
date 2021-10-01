const purchaseInfo = {
  sum: 100
};

function finish() {
  chargeMoney(purchaseInfo);
  console.log("Transaction finished!");
}

function chargeMoney(info) {
  console.log(`Charging money - ${info.sum}`);
}

function error(err) {
  console.log(err);
}

function trackCheckout(info, successCb, errorCb) {
  console.log("Tracking your purchase...");
  setTimeout(() => {
    if (info.sum > 100) {
      successCb(info);
    } else {
      errorCb("Sorry something went wrong");
    }
  }, 1000);
}

// trackCheckout(purchaseInfo, finish, error);
// with the call back we inverted the control,
// which is bad, we cant be sure if the trackCkeckout method
// will eventually call our callbacks and how many time it will call them

function trackCheckoutPromise(info) {
  console.log("Tracking your purchase...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (info.sum > 100) {
        resolve();
      } else {
        reject("Sorry something went wrong");
      }
    }, 1000);
  });
}

trackCheckoutPromise(purchaseInfo) // with the promise we un-inverted the control
  .then((res) => finish(res))
  .catch((err) => error(err));
