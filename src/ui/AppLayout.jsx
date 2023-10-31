import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./loader";
import { Outlet, useNavigation } from "react-router-dom";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll-none my-10">
        <main className="mx-auto max-w-3xl overflow-auto">
          {/* <h1>Content</h1> */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
