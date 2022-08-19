import React from "react";
import { getWeather } from "../store/actions/weatherAction";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../utils/helper";

export default function SearchInput() {
  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "cairo",
    },
    resolver: yupResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
  });
  const onSubmit = (city) => {
    dispatch(getWeather(city.search));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="search-box">
        <input
          type="text"
          className="search-txt"
          placeholder="Enter City Name..."
          {...register("search")}
        />
        <span>
          <button type="submit"  className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </span>
      </div>
      <p style={{ color: "#7aff00" , marginTop: "4px"}}>{errors.search?.message}</p>
    </form>
  );
}
