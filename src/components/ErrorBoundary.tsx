import React from "react";
import lamp from "~/assets/images/lamp.png";
import ROUTES_OBJECT from "~/routes/RoutesObject";
class ErrorBoundary extends React.Component<
  { children: any },
  { hasError: boolean; errorMessage: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    this.setState({ errorMessage: error.message });
    console.table(error);
    console.table(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="h-screen w-full set_row_middle">
          <div className="continer set_row_middle">
            <div className="w-full lg:w-1/2 set_col_middle">
              <img src={lamp} alt="404" />
            </div>
            <div className="w-full lg:w-1/2 set_col_middle">
              <h1 className="text-main text-[8rem] drop-shadow-2xl">
                 Error !
              </h1>
              <h2 className="font-bold text-lg my-2">An error occurred</h2>
              <p className="text-gray-700 mt-5 text-base">
                {this.state.errorMessage}
              </p>
              <a
                href={ROUTES_OBJECT.login}
                className="mt-16 bg-main border-2 border-main rounded-md text-white text-sm py-3 px-5 shadow-sm hover:shadow-lg hover:bg-primary-main"
              >
                 Back to home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
