import { useParams } from "react-router-dom";


const PaymentSuccess = () => {
    const {tranId}  = useParams()
    return (
        <div  className="text-center">
            <h1 className="mt-32  font-bold text-2xl">Payment Success !</h1>
            <p>TrnxId : {tranId}</p>
        </div>
    );
};

export default PaymentSuccess;