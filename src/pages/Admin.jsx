
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  editProduct,
} from "../features/productSlice";
import toast, { Toaster } from "react-hot-toast";

const Admin = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filtered); 

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = () => {
    if (!form.title || !form.price || !form.image || !form.category) return;

    const newProduct = {
      ...form,
      id: Date.now(),
      price: parseFloat(form.price),
    };

    dispatch(addProduct(newProduct));
    toast.success("New product added successfully");
    setForm({ title: "", price: "", category: "", image: "" });
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    toast.success("Product deleted successfully");
  };

  const handleEdit = (product) => {
    setForm(product);
    setIsEditing(true);
    setEditId(product.id);
  };

  const handleUpdate = () => {
    if (!form.title || !form.price || !form.image || !form.category) return;
    dispatch(
      editProduct({
        id: editId,
        editProduct: {
          ...form,
          price: parseFloat(form.price),
        },
      })
    );
    toast.success("Product updated successfully");
    setForm({ title: "", price: "", category: "", image: "" });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="p-6 bg-black min-h-screen text-yellow-300">
      <h1 className="text-xl font-bold mb-4">🛠️ Admin Panel</h1>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="title"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
          className="border border-yellow-500 px-3 py-2 rounded bg-black text-yellow-200 placeholder-yellow-400"
        />
        <input
          type="number"
          name="price"
          value={form.price}
          placeholder="Price"
          onChange={handleChange}
          className="border border-yellow-500 px-3 py-2 rounded bg-black text-yellow-200 placeholder-yellow-400"
        />
        <input
          type="text"
          name="category"
          value={form.category}
          placeholder="Category"
          onChange={handleChange}
          className="border border-yellow-500 px-3 py-2 rounded bg-black text-yellow-200 placeholder-yellow-400"
        />
        <input
          type="text"
          name="image"
          value={form.image}
          placeholder="Image URL"
          onChange={handleChange}
          className="border border-yellow-500 px-3 py-2 rounded bg-black text-yellow-200 placeholder-yellow-400"
        />
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
          >
            Update Product
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
          >
            Add Product
          </button>
        )}
      </div>

      <h2 className="text-lg font-semibold mb-2">📦 Product List</h2>
      <ul className="space-y-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-gray-900 p-4 rounded border border-yellow-700 flex justify-between items-center text-yellow-200"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm">₹ {product.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(product)}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Toaster />
    </div>
  );
};

export default Admin;









