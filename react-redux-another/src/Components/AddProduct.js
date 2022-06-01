import axios from "axios";
import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../Redux/Action";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    addProduct(data);
  };

  return (
    <div>
      <h1>Add Product</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="mx-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Your name"
          className="my-3"
        >
          <Form.Control
            {...register("name", { required: true })}
            type="name"
            placeholder="name"
            className="mb-3"
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="type" className="my-3">
          <Form.Control
            {...register("type", { required: true })}
            type="text"
            placeholder="type"
            className="mb-3"
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Price" className="my-3">
          <Form.Control
            {...register("photo", { required: true })}
            type="price"
            placeholder="price"
            className="mb-3"
            required
          />
        </FloatingLabel>

        <input type="submit" className="btn bg-red my-4 w-100 d-block" />
      </Form>
    </div>
  );
};

export default AddProduct;
