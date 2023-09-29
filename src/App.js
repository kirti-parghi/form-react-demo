import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({

    defaultValues:{
      "First name": "Kirti"
    }

  });
  const onSubmit = data => console.log(data);
  console.log(errors);

  // useEffect(()=>{
  //   setValue("First name","Akshay")
  // },[])
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='my-3'>
        <label htmlFor="firstName">First Name</label>
      <input type="text" placeholder="First name" className='form-control' {...register("First name", {required: true, maxLength: 80})} />
      {/* {errors && errors['First name'] && errors['First name'].type == 'required' && <p className='text-danger'>Mandatory</p>}
      {errors && errors['First name'] && errors['First name'].type == 'maxLength' && <p className='text-danger'>Exceed length</p>} */}
      </div>
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="number" placeholder="Age" {...register("Age", { required:true,max: 60, min: 18})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />

      <input type="submit" />
    </form>
  );
}