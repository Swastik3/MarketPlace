import Header from '../components/Header';
import { CartItem } from '../types';

const Cart: React.FC = () => {
  // In a real app, you'd manage the cart state and fetch items
  const cartItems: CartItem[] = [
    { id: '1', name: 'Product 1', price: 19.99, quantity: 2, image: '/images/product1.jpg', description: 'Description 1' },
    { id: '2', name: 'Product 2', price: 29.99, quantity: 1, image: '/images/product2.jpg', description: 'Description 2' },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <span>{item.name}</span>
            <span>
              ${item.price.toFixed(2)} x {item.quantity}
            </span>
          </div>
        ))}
        <div className="text-xl font-bold mt-4">
          Total: ${total.toFixed(2)}
        </div>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4">
          Proceed to Checkout
        </button>
      </main>
    </div>
  );
};

export default Cart;