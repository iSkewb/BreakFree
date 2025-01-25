export const formatCurrency = (amount) => {
    return `$${parseFloat(amount).toFixed(2)}`;
  };
  
  export const calculateAnnualCost = (subscriptions) => {
    return subscriptions.reduce((total, sub) => {
      const cost = parseFloat(sub.cost);
      return total + (sub.frequency === 'monthly' ? cost * 12 : cost);
    }, 0);
  };
  