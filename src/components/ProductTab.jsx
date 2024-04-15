import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  updateItem,
  deleteItem,
  selectItemsList,
} from "../redux/itemSlice";
import { Table, Button } from 'react-bootstrap';
import {BiTrash} from 'react-icons/bi';
const ProductTab = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const allItems = useSelector(selectItemsList);

  useEffect(() => {
    console.log("useEffect called");
    console.log(allItems);
    setItems(allItems);
  }, [allItems]);

  const handleItemChange = (event, itemid) => {
    const updatedItems = items.map((item) => {
      if (item.itemId === itemid) {
        return { ...item, [event.target.name]: event.target.value };
      }
      return item;
    });
    console.log("handle item chage",updatedItems);
    setItems(updatedItems);

    dispatch(
      updateItem({
        id: itemid,
        updatedItem: updatedItems.find((item) => item.itemId === itemid),
      })
    );
  };

  const handleAddItem = () => {
    const newItemId = (
      +new Date() + Math.floor(Math.random() * 999999)
    ).toString(36);
    const newItem = {
      itemId: newItemId,
      itemName: "",
      itemDescription: "",
      itemPrice: 1.0,
      itemQuantity: 1,
      itemGroup:"",
    };
    setItems([...items, newItem]);
    dispatch(addItem(newItem));
  };

  const handleDeleteItem =async(itemId) => {
    console.log(itemId);
    // const filteredItems = items.filter((item) => item.itemId !== itemId);
    // console.log(filteredItems);
    // setItems(filteredItems);
    dispatch(deleteItem(itemId));
  };

//   return (
//     <div>
//       <h2>Product Tab</h2>
//       <button onClick={handleAddItem}>Add Item</button>
//       {items.map((item) => (
//         <div key={item.id}>
//           <input
//             type="text"
//             name="name"
//             value={item.name}
//             onChange={(e) => handleItemChange(e, item.itemId)}
//           />
//           <input
//             type="text"
//             name="description"
//             value={item.description}
//             onChange={(e) => handleItemChange(e, item.itemId)}
//           />
//           <input
//             type="number"
//             name="price"
//             value={item.price}
//             onChange={(e) => handleItemChange(e, item.itemId)}
//           />
//           <input
//             type="number"
//             name="quantity"
//             value={item.quantity}
//             onChange={(e) => handleItemChange(e, item.itemId)}
//           />
//           <button onClick={() => handleDeleteItem(item.itemId)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );

// return (
//     <div className="products-table">
//       <Table bordered hover>
//         <thead>
//           <tr>
//             <th>ITEM</th>
//             <th>QTY</th>
//             <th>PRICE/RATE</th>
//             <th className="text-center">ACTION</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id}>
//               <td style={{ width: "100%" }}>
//                 {console.log(item)}
//                 <ProductTableField
//                   value={item.itemName}
//                   onChange={(e) => handleItemChange(e, item.itemId)}
//                   cellData={{
//                     type: "text",
//                     name: "name",
//                     placeholder: "Item name",
//                   }}
//                 />
//                 <ProductTableField
//                   value={item.itemDescription }
//                   onChange={(e) => handleItemChange(e, item.itemId)}
//                   cellData={{
//                     type: "text",
//                     name: "description",
//                     placeholder: "Item description",
//                   }}
//                 />
//               </td>
//               <td className="text-center" style={{ minWidth: "50px" }}>
//                 <BiTrash onClick={() => handleDeleteItem(item.id)} style={{ cursor: 'pointer' }} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <Button className="fw-bold" onClick={handleAddItem}>
//         Add Item
//       </Button>
//     </div>
//   );
return (
  // <div className="products-table">
  //   <h2>Product Tab</h2>
  //   <Table bordered hover responsive>
  //     <thead>
  //       <tr>
  //         <th style={{ width: "20%" }}>ITEM</th>
  //         <th style={{ width: "50%" }}>DESCRIPTION</th>
  //         <th className="text-center" style={{ width: "10%" }}>ACTION</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {items.map((item) => (
  //         <tr key={item.itemId}>
  //           <td>
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="itemName"
  //               value={item.itemName}
  //               onChange={(e) => handleItemChange(e, item.itemId)}
  //             />
  //           </td>
  //           <td>
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="itemDescription"
  //               value={item.itemDescription}
  //               onChange={(e) => handleItemChange(e, item.itemId)}
  //             />
  //           </td>
  //           {/* <td className="text-center">
  //             <input
  //               type="number"
  //               className="form-control text-center"
  //               name="quantity"
  //               min="1"
  //               value={item.quantity}
  //               onChange={(e) => handleItemChange(e, item.itemId)}
  //             />
  //           </td>
  //           <td className="text-center">
  //             <input
  //               type="number"
  //               className="form-control text-center"
  //               name="price"
  //               min="1.00"
  //               step="0.01"
  //               value={item.price}
  //               onChange={(e) => handleItemChange(e, item.itemId)}
  //             />
  //           </td> */}
  //           <td className="text-center">
  //             <button
  //               className="btn btn-sm btn-danger"
  //               onClick={() => handleDeleteItem(item.itemId)}
  //             >
  //               <BiTrash />
  //             </button>
  //           </td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </Table>
  //   <Button className="fw-bold" onClick={handleAddItem}>
  //     Add Item
  //   </Button>
  // </div>
  <div className="products-table">
  
  <Table bordered hover responsive className="rounded"> {/* Added rounded class */}
    <thead>
      <tr>
        <th style={{ width: "20%" }} className="text-center">ITEM</th> {/* Centered "ITEM" */}
        <th style={{ width: "50%" }} className="text-center">DESCRIPTION</th> {/* Centered "DESCRIPTION" */}
        <th className="text-center" style={{ width: "30%" }}>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.itemId}>
          <td>
            <input
              type="text"
              className="form-control"
              name="itemName"
              value={item.itemName}
              onChange={(e) => handleItemChange(e, item.itemId)}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              name="itemDescription"
              value={item.itemDescription}
              onChange={(e) => handleItemChange(e, item.itemId)}
            />
          </td>
          <td className="text-center">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteItem(item.itemId)}
            >
              <BiTrash /> Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
  <Button variant="primary" className="fw-bold" onClick={handleAddItem}>Add Item</Button>
</div>

);

};

export default ProductTab;

