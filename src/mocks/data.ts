export const mockTable = {
  isError: false,
  isReady: true,
  tables: [
    {
      name: 'DELIVERY',
      products: [
        { id: 40956, name: 'Bier', quantity: 4 },
        { id: 38365, name: 'Coca Cola', quantity: 3 },
        { id: 38288, name: 'Homemade Mini Loempias', quantity: 6 },
      ],
      sum: 86.4,
    }
  ],
};

export const mockLoading = {
  isError: false,
  isReady: false,
  tables: [],
};

export const mockError = {
  isError: true,
  isReady: true,
  tables: [],
};
