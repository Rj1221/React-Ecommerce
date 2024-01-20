import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Link } from "react-router-dom";
type DataType = {
  _id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: ReactElement;
  action: ReactElement;
};

type Column<T> = {
  Header: string;
  accessor: keyof T;
  disableFilters?: boolean;
  disableSortBy?: boolean;
};
const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Amount",
    accessor: "amount",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Quantity",
    accessor: "quantity",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Discount",
    accessor: "discount",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Status",
    accessor: "status",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Action",
    accessor: "action",
    disableFilters: true,
    disableSortBy: true,
  },
];

const Orders = () => {
  const [rows] = useState<DataType[]>([
    {
      _id: "123",
      amount: 123,
      quantity: 123,
      discount: 123,
      status: <span className="red">Processing</span>,
      action: <Link to={`/orders/${123}`}>View</Link>,
    },
  ]);
  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6 ? true : false
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {Table}
    </div>
  );
};

export default Orders;
