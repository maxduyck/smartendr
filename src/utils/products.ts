export const groupProducts = (products: Product[]) => {
  const allOrders: FlatOrder[] = [];
  products.forEach((current) => {
    const existing = allOrders.find((product) => product.id === current.id);
    if (existing) {
      const index = allOrders.findIndex((product) => product.id === current.id);
      const quantity = existing.quantity + current.quantity;
      allOrders[index] = { id: existing.id, name: existing.name, quantity };
    } else {
      allOrders.push(current);
    }
  });
  
  return allOrders;
};

export const splitTables = (orders: Order[]) => {
  const tables: Table[] = [];
    
  orders.forEach((order) => {
    const { products, table_name, total } = order;
    if (!products?.length) return;
    const cleanProducts = products.filter(({ id }) => !!id);
    if (!cleanProducts.length) return;

    const existing = tables.find(({ name }) => name === table_name);
    if (!existing) {
      tables.push({ name: table_name, products: groupProducts(cleanProducts), sum: Number(total) });
    } else {
      const index = tables.findIndex(({ name }) => name === table_name);
      
      tables[index] = {
        ...tables[index],
        products: groupProducts([...tables[index].products, ...cleanProducts] as Product[]),
        sum: tables[index].sum + Number(total),
      };
    }
  });

  return tables;
};
