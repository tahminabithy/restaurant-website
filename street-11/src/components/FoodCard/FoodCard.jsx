
import React, { useContext } from "react";
import { authProvider } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useCarts } from "../../hooks/UseCarts";

const FoodCard = ({ item }) => {
  const [, refetch] = useCarts();
  const { user } = useContext(authProvider);
  const axiosSecure = useAxiosSecure();
  const { name, price, recipe, image } = item;
  const location = useLocation();
  const navigate = useNavigate();
  const handleAddTocart = (item) => {
    console.log(item);
    if (user?.email != null) {
      const food = {
        email: user?.email,
        menuId: item._id,
        name,
        price,
        recipe,
        image
      }
      axiosSecure.post('/carts', food)
        .then(function (response) {
          console.log(response);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added to cart",
            showConfirmButton: false,
            timer: 1500
          });
          refetch();

        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
      Swal.fire({
        title: "you are not logged in",
        text: "please login to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });

    }


  };
  return (
    <div className="p-10">
      <div className="my-4 card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-yellow-500 absolute right-4 top-3 text-white p-2 rounded-md text-lg">
          $ {price}
        </p>
        <div className="card-body">
          <h2 className="text-center text-xl font-semibold">{name}</h2>
          <p className="text-justify text-[#737373]">{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={() => handleAddTocart(item)} className="btn border-b-4 border-[#BB8506] text-[#BB8506] hover:bg-[#111827] hover:border-[#BB8506]  mt-6">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FoodCard;
