import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const price = parseFloat(total.toFixed(2));
  console.log(price);

  return (
    <div className="w-full">
      <SectionTitle
        subHeading={"Pay and get"}
        heading={" Payment"}
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
