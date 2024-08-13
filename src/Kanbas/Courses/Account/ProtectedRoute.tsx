import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
    //checking if someone is logged in
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    //render child
    return children;
  } else {
    //navigate to sign in
    return <Navigate to="/Kanbas/Account/Signin" />;
  }
}
