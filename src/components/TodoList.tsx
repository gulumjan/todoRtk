"use client";

import { FC, useState } from "react";
import scss from "./TodoList.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodoQuery,
  usePostTodoMutation,
} from "@/redux/api/todo";

const TodoList: FC = () => {
  const {
    register: registerEdit,
    handleSubmit: handleSubmitEd,
    reset: resetEdit,
    setValue,
  } = useForm<ITodo>();
  const { register, handleSubmit, reset } = useForm<ITodo>();
  const [postTodo] = usePostTodoMutation();
  const { data } = useGetTodoQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodo] = useEditTodoMutation();
  const [edit, setEdit] = useState<number | null>(null);
  const onSubmit: SubmitHandler<ITodo> = async (data) => {
    console.log(data);
    try {
      const newData = {
        name: data.name,
        email: data.email,
        image: data.email,
      };
      if (edit !== null) {
        const response = await editTodo({ data: newData, _id: edit });
        console.log("Update response:", response);
        setEdit(null);
      } else {
        await postTodo(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>
          <h1>Todo List</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Name" {...register("image")} type="text" />
            <input placeholder="Email" {...register("image")} type="text" />
            <input placeholder="Photo URL" {...register("image")} type="text" />

            <button type="submit">Send</button>
          </form>
        </div>
        <div className={scss.carts}>
          {data?.map((el, index) =>
            edit === el._id ? (
              <>
                <div key={index} className={scss.editCart}>
                  <form onSubmit={handleSubmitEd(onSubmit)}>
                    <input
                      placeholder="Name"
                      {...registerEdit("name")}
                      type="text"
                    />
                    <input
                      placeholder="Email"
                      {...registerEdit("email")}
                      type="text"
                    />
                    <input
                      placeholder="Image URL"
                      {...registerEdit("image")}
                      type="text"
                    />
                    <button type="submit">Save</button>
                  </form>
                </div>
              </>
            ) : (
              <>
                <div className={scss.cart} key={index}>
                  <img src={el.image} alt="Error" />
                  <h6>{el.name}</h6>
                  <div className={scss.btns}>
                    <button onClick={() => setEdit(el._id!)}>edit</button>
                    <button onClick={() => deleteTodo(el._id!)}>delete</button>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
