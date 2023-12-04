import { useDispatch, useSelector } from "react-redux";
import Btn from "../Component/Btn";
import styles from "./Cart.module.css";
import { clear, deleteProduct, incre, minus } from "../Redux/Slice";

function Cart() {
  const dispatch = useDispatch();
  const datacart = useSelector((e) => e.statemain.cart);

  return (
    <div className="flex justify-center flex-col items-center">
      <table className={styles.table_main}>
        <thead>
          <tr>
            <th className="uppercase text-xl">Image</th>
            <th className="uppercase text-xl">Name</th>
            <th className="uppercase text-xl">Price</th>
            <th className="uppercase text-xl">Quantity</th>
            <th className="uppercase text-xl">Total</th>
            <th className="uppercase text-xl">Status</th>
          </tr>
        </thead>
        <tbody>
          {datacart &&
            datacart.map((e) => (
              <tr key={e.id}>
                <td className="">
                  <img
                    className="max-w-[200px] block mx-auto p-3"
                    src={e.img}
                    alt="Img"
                  />
                </td>
                <td className="text-center font-bold text-xl">{e.name}</td>
                <td className="text-center font-bold text-xl">
                  {e.lastprice}$
                </td>
                <td className="">
                  <div className="flex justify-center items-center gap-3">
                    <Btn
                      onClick={() => dispatch(minus(e.id))}
                      type={`${e.quantity === 1 ? "dis" : "sub1"}`}
                    >
                      -
                    </Btn>
                    <span className="text-2xl font-bold">{e.quantity}</span>
                    <Btn onClick={() => dispatch(incre(e.id))} type="sub1">
                      +
                    </Btn>
                  </div>
                </td>
                <td className="text-center font-bold text-xl">
                  {(e.lastprice * e.quantity).toFixed(2)}$
                </td>
                <td className="text-center font-bold text-xl">
                  <Btn
                    onClick={() => dispatch(deleteProduct(e.id))}
                    type="main1"
                  >
                    Delete
                  </Btn>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {datacart && (
        <div className="self-end mt-6 mx-12">
          <Btn onClick={() => dispatch(clear())} type="main1">
            Clear Card
          </Btn>
        </div>
      )}
    </div>
  );
}

export default Cart;
