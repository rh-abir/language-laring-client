import { useParams } from "react-router-dom";

const PaymentFaild = () => {
  const { tranId } = useParams();
  return (
    <div className="text-center">
      <h1 className="mt-32  font-bold text-2xl">Payment Failed !</h1>
      <p>TrnxId : {tranId}</p>
    </div>
  );
};

export default PaymentFaild;
