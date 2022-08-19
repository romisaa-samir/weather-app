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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="searchBar">
          <input
            id="searchQueryInput"
            placeholder="Enter City Name..."
            {...register("search")}
          />
          <button
            id="searchQuerySubmit"
            type="submit"
            style={{ marginTop: "8px" }}
          >
            <svg style={{ width: "24px ", height: "24px" }} viewBox="0 0 24 24">
              <path
                fill="#666666"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              />
            </svg>
          </button>
        </div>
        <p style={{ color: "#7aff00", marginTop: "-5px"}}>{errors.search?.message}</p>
      </form>
    </>
  );
}
