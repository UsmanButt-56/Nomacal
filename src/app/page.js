import CustomerService from "@/Sections/HomeSection/CustomerService";
import Customs from "@/Sections/HomeSection/Customs";
import Frequently_Asked_Questions from "@/Sections/HomeSection/Frequently_Asked_Questions";
import Hero from "@/Sections/HomeSection/Hero";
import How_can_one from "@/Sections/HomeSection/How_can_one";
import Never_Sell from "@/Sections/HomeSection/Never_Sell";
import Nomacal_makes_borrowing from "@/Sections/HomeSection/Nomacal_makes_borrowing";
import Reasons_to_borrow from "@/Sections/HomeSection/Reasons_to_borrow";
import See_what_you from "@/Sections/HomeSection/See_what_you";
import Take_a_loan from "@/Sections/HomeSection/Take_a_loan";
import ThreeKeys from "@/Sections/HomeSection/ThreeKeys";

export default function Home() {
  return (
    <>
    <Hero />
    <Reasons_to_borrow />
    <How_can_one />
    <See_what_you />
    <ThreeKeys />
    <Nomacal_makes_borrowing />
    <CustomerService />
    <Take_a_loan />
    <Never_Sell />
    <Frequently_Asked_Questions />
    </>
  );
}
