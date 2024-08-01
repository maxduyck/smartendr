import { groupProducts, splitTables } from './products';

describe('groupProducts', () => {
  it('should group products by id and sum quantities', () => {
    const products = [
      { id: 1, name: 'Product A', quantity: 2 },
      { id: 2, name: 'Product B', quantity: 1 },
      { id: 1, name: 'Product A', quantity: 3 },
    ];

    const result = groupProducts(products);

    expect(result).to.deep.equal([
      { id: 1, name: 'Product A', quantity: 5 },
      { id: 2, name: 'Product B', quantity: 1 },
    ]);
  });

  it('should return an empty array if no products are given', () => {
    const products: Product[] = [];

    const result = groupProducts(products);

    expect(result).to.deep.equal([]);
  });

  it('should handle a single product', () => {
    const products = [
      { id: 1, name: 'Product A', quantity: 2 },
    ];

    const result = groupProducts(products);

    expect(result).to.deep.equal([
      { id: 1, name: 'Product A', quantity: 2 },
    ]);
  });

  it('should handle multiple products with unique ids', () => {
    const products = [
      { id: 1, name: 'Product A', quantity: 2 },
      { id: 2, name: 'Product B', quantity: 3 },
      { id: 3, name: 'Product C', quantity: 1 },
    ];

    const result = groupProducts(products);

    expect(result).to.deep.equal([
      { id: 1, name: 'Product A', quantity: 2 },
      { id: 2, name: 'Product B', quantity: 3 },
      { id: 3, name: 'Product C', quantity: 1 },
    ]);
  });
});

describe('splitTables', () => {
  it('should split orders into tables correctly', () => {
    const orders: Order[] = [
      { id: 1, products: [{ id: 1, name: 'Product A', quantity: 2 }], table_name: 'Table 1', total: '10' },
      { id: 2, products: [{ id: 2, name: 'Product B', quantity: 1 }], table_name: 'Table 2', total: '5' },
      { id: 3, products: [{ id: 1, name: 'Product A', quantity: 3 }], table_name: 'Table 1', total: '15' },
    ];

    const result = splitTables(orders);

    expect(result).to.deep.equal([
      { name: 'Table 1', products: [{ id: 1, name: 'Product A', quantity: 5 }], sum: 25 },
      { name: 'Table 2', products: [{ id: 2, name: 'Product B', quantity: 1 }], sum: 5 },
    ]);
  });

  it('should return an empty array if no orders are given', () => {
    const orders: Order[] = [];

    const result = splitTables(orders);

    expect(result).to.deep.equal([]);
  });

  it('should skip orders with no products', () => {
    const orders: Order[] = [
      { id: 1, products: [], table_name: 'Table 1', total: '10' },
      { id: 2, products: [{ id: 2, name: 'Product B', quantity: 1 }], table_name: 'Table 2', total: '5' },
    ];

    const result = splitTables(orders);

    expect(result).to.deep.equal([
      { name: 'Table 2', products: [{ id: 2, name: 'Product B', quantity: 1 }], sum: 5 },
    ]);
  });

  it('should skip orders with products having no ids', () => {
    const orders: Order[] = [
      { id: 1, products: [{ id: 0, name: 'Product A', quantity: 2 }], table_name: 'Table 1', total: '10' },
      { id: 2, products: [{ id: 2, name: 'Product B', quantity: 1 }], table_name: 'Table 2', total: '5' },
    ];

    const result = splitTables(orders);

    expect(result).to.deep.equal([
      { name: 'Table 2', products: [{ id: 2, name: 'Product B', quantity: 1 }], sum: 5 },
    ]);
  });
});
