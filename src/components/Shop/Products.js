import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS_STATIC_LIST = [
  {
    id: 'PROD1',
    price: 105,
    title: 'Ecom-prod 1',
    description: 'This is the first e-commerce product'
  },
  {
    id: 'PROD2',
    price: 115,
    title: 'Ecom-prod 2',
    description: 'This is the second e-commerce product'
  },
  {
    id: 'PROD3',
    price: 125,
    title: 'Ecom-prod 3',
    description: 'This is the third e-commerce product'
  },
  {
    id: 'PROD4',
    price: 135,
    title: 'Ecom-prod 4',
    description: 'This is the fourth e-commerce product'
  },
  {
    id: 'PROD5',
    price: 145,
    title: 'Ecom-prod 5',
    description: 'This is the fifth e-commerce product'
  },{
    id: 'PROD6',
    price: 155,
    title: 'Ecom-prod 6',
    description: 'This is the sixth e-commerce product'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS_STATIC_LIST.map((product) =>  (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
       
      </ul>
    </section>
  );
};

export default Products;
