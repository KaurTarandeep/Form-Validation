import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"

function SubmitComment() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onFormSubmit = (data) => {
    const { rating, name, comment } = data;
    alert(`Current State is : { "author": "${name}"\n "Rating" : "${rating}"\n"Comment" : "${comment}" }`);
    console.log(data)
  };

  const registerOption = {
    name: {
      required: "Your name is required",
      minLength: {
        value: 2,
        message: "Must be greater than 2 characters"
      },
      maxLength: {
        value: 15,
        message: "Must be less than 15 characters"
      }
    }
  }

  return (
    <form className='outer' onSubmit={handleSubmit(onFormSubmit)}>


      <div className='container'>
        <h1 className='inline'>
          Submit Comment

          <Link to="/">
            <div className='img'> </div>
          </Link>

        </h1>
        <label>Rating</label> <br /><br />
        <select name='rating' {...register("rating", { required: "Rating is required" })} >
          <option value=''>--choose--</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        {errors.rating && <span className='error'>{errors.rating.message}</span>} <br /><br />

        <label>Your Name</label> <br /><br />
        <input type="text" name="name"  {...register("name", registerOption.name)} placeholder="Your Name" />
        <span className='error'> {errors?.name && errors.name.message} </span>
        <br /><br />

        <label>Comment</label><br /><br />
        <textarea type="text" name="comment" {...register("comment", {
          required: "Comment is required"
        })}></textarea><br />
        {errors.comment && <span className='error'>{errors.comment.message}</span>}
        <br /><br />
        <button>Submit</button>
      </div>
    </form>
  );
}

export default SubmitComment;







