import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My First Book",
    price: 6,
    description: "First Book I wrote"
  },
  {
    id: "p2",
    title: "My Seconed Book",
    price: 10,
    description: "Seconed Book I wrote"
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(pro => <ProductItem key={pro.id} id={pro.id} title={pro.title} price={pro.price} description={pro.description} />)}

      </ul>
    </section>
  );
};

export default Products;
