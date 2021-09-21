import React from 'react';
import { useForm } from 'react-hook-form';

export default function CheckoutComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form className="shipping_area" onSubmit={handleSubmit(onSubmit)}>
      <div className="details">
        <div>
          <h2>Shipping Information</h2>
          <input defaultValue="test" {...register('example')} />

          <input {...register('exampleRequired', { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </div>
      </div>
      <div className="summary">
        <div className="header">
          <h3>Summary</h3>
        </div>
        <div>
          <h5>Products Price: $ 5454</h5>
          <h5>Shipping Charge: $ 54</h5>
        </div>
        <div>
          <h6>
            Total amount <br /> (including VAT)
          </h6>
        </div>
      </div>
    </form>
  );
}
