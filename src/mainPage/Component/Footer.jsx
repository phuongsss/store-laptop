import { useSelector } from "react-redux";

function Footer() {
  const dataprice = useSelector((e) => e.statemain.cart);

  const totalprice = dataprice?.reduce(
    (cur, next) => cur + next.lastprice * next.quantity,
    0,
  );
  const totalproduct = dataprice?.reduce((cur, next) => cur + next.quantity, 0);
  // console.log(data);
  return (
    <div className="w-full bg-yellow-300 mt-5 py-3 px-5 flex justify-between items-center  ">
      <p className="font-bold text-xl">By Le Nguyen Phuong</p>
      <p className="flex flex-col">
        <span className="font-medium text-xl">
          Total Product: {totalproduct}
        </span>
        <span className="font-medium text-xl">
          Total Price: {totalprice?.toFixed(2)}$
        </span>
      </p>
    </div>
  );
}

export default Footer;
