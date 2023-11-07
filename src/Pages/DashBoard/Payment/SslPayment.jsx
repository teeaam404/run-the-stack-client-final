import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const SslPayment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams()


    const onSubmit = data => {
        data.CourseId = id;

        fetch("https://run-the-stack-server-delta.vercel.app/order", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                window.location.replace(result.url)
                console.log(result);
            })
        console.log(data);
    };
    console.log(errors);

    return (
        <div>
            <h1 className='text-center p-10 text-xl my-5 font-bold'>Please Complete your SSL Payment!!</h1>
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className="input input-bordered input-primary" type="text" placeholder="Your Name" {...register("name", { required: true, maxLength: 80 })} />
                    <input className="ms-5 input input-bordered input-primary" type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                </div>
                <div className='my-5'>
                    <input className="input input-bordered input-primary" type="tel" placeholder="Mobile number" {...register("number", { required: true, minLength: 6, maxLength: 12 })} />
                    <input className="ms-5 input input-bordered input-primary" type="number" placeholder="post code" {...register("post", { required: true, maxLength: 80 })} />
                </div>
                <input className="input input-bordered input-primary" type="text" placeholder="address" {...register("address", { required: true, maxLength: 80 })} />
                <br />
                <input className='btn btn-outline mt-5' type="submit" />
            </form>
        </div>
    );
}

export default SslPayment;