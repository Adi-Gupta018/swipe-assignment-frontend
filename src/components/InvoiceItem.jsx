import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";
import { selectItemsList } from "../redux/itemSlice";
import { useSelector, useDispatch } from "react-redux";

// const InvoiceItem = (props) => {
//   const { onItemizedItemEdit, currency, onRowDel, items, onRowAdd } = props;
//   console.log(props);

//   const itemTable = items.map((item) => (
//     <>
//     <ItemRow
//       key={item.id}
//       item={item}
//       onDelEvent={onRowDel}
//       onItemizedItemEdit={onItemizedItemEdit}
//       currency={currency}
//     />
//     {/* <div>{console.log("map",item)}</div> */}
//     </>
//   ));

//   return (
//     <div>
//       <Table>
//         <thead>
//           <tr>
//             <th>ITEM</th>
//             <th>QTY</th>
//             <th>PRICE/RATE</th>
//             <th className="text-center">ACTION</th>
//           </tr>
//         </thead>
//         <tbody>{itemTable}</tbody>
//       </Table>
//       <Button className="fw-bold" onClick={onRowAdd}>
//         Add Item
//       </Button>
//     </div>
//   );
// };

const InvoiceItem = (props) => {
  const { onItemizedItemEdit, currency, onRowDel, items, onRowAdd } = props;

  const itemTable = (
    <>
      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              onDelEvent={onRowDel}
              onItemizedItemEdit={onItemizedItemEdit}
              currency={currency}
            />
          ))}
        </tbody>
      </Table>
    </>
  );

  return (
    <div>
      {items.length > 0 && itemTable} {/* Conditionally render the table */}
      <Button className="fw-bold" onClick={onRowAdd}>
        Add Item
      </Button>
    </div>
  );
};

const ItemRow = (props) => {
  const onDelEvent = () => {
    props.onDelEvent(props.item.itemId);
  };

  // Fetch using id from redux 
  const globalItems = useSelector(selectItemsList)

  const reqItem = globalItems.find((item) => 
     item.itemId === props.item.itemId )


  return (
    <tr>
      <td style={{ width: "100%" }}>
        <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.itemId)
          }
          cellData={{
            type: "text",
            name: "itemName",
            placeholder: "Item name",
            value: reqItem.itemName,
            id: props.item.itemId,
          }}
        />
        <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.itemId)
          }
          cellData={{
            type: "text",
            name: "itemDescription",
            placeholder: "Item description",
            value: reqItem.itemDescription,
            id: props.item.itemId,
          }}
        />
      </td>
      <td style={{ minWidth: "70px" }}>
        <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.itemId)
          }
          cellData={{
            type: "number",
            name: "itemQuantity",
            min: 1,
            step: "1",
            value: reqItem.itemQuantity,
            id: props.item.itemId,
          }}
        />
      </td>
      <td style={{ minWidth: "130px" }}>
        <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.itemId)
          }
          cellData={{
            leading: props.currency,
            type: "number",
            name: "itemPrice",
            min: 1,
            step: "0.01",
            presicion: 2,
            textAlign: "text-end",
            value: reqItem.itemPrice,
            id: props.item.itemId,
          }}
        />
      </td>
      <td className="text-center" style={{ minWidth: "50px" }}>
        <BiTrash
          onClick={onDelEvent}
          style={{ height: "33px", width: "33px", padding: "7.5px" }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

export default InvoiceItem;
