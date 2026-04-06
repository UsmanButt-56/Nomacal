'use client';
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function useAuthRedirect() {
    const router = useRouter();
    const user = useSelector((state) => state.user.user);
    console.log("User data is ", user);

    const gotoLoan = () => {
        if (user) {
            router.push('/get-loan-now');
        }
        else {
            router.push('/login');
        }
    };
    return { gotoLoan };
}