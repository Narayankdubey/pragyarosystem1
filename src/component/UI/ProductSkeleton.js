import React from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";

const ProductSkeleton = () => {
  const { skeleton } = useSelector((state) => state.ui);
  return (
    <div style={{ margin: "15px" }}>
      <Skeleton variant="rectangular" width={210} height={200} />
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton width="50%" height={50} />
    </div>
  );
};

export default ProductSkeleton;
