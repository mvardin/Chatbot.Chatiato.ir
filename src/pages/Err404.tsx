import { Link } from "react-router-dom";
import lamp from "~/assets/images/lamp.png";
import ROUTES_OBJECT from "~/routes/RoutesObject";
const Err404 = () => {
  return (
    <div className="h-screen w-full set_row_middle">
      <div className="continer set_row_middle">
        <div className="w-full lg:w-1/2 set_col_middle">
          <img src={lamp} alt="404" />
        </div>
        <div className="w-full lg:w-1/2 set_col_middle">
          <h1 className="text-main text-[10rem] drop-shadow-2xl">
            404
          </h1>
          <h2 className="font-bold text-lg my-2">Not found</h2>
          <p className="text-gray-700 mt-5 text-base">
            This Route not exist in this server!
          </p>
          <Link
            to={ROUTES_OBJECT.login}
            className="mt-16 bg-main border-2 border-main rounded-md text-white text-sm py-3 px-5 shadow-sm hover:shadow-lg hover:bg-primary-main"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Err404;
