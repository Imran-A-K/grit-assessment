import { UserContext } from "@/components/common/UserContext";
import { useContext } from "react";

export const useDate = () => useContext(UserContext);
