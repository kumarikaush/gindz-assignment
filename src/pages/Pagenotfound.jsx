// page when wrong link is entered

import Errs from "../assets/errs.jpg";

import { Link } from "react-router-dom";
export const Pagenotfound = () => {
  return (
    <section className="min-h-screen">
      <div className="w-2/4 mx-auto my-10 flex flex-col gap-10">
        <h1 className="text-center text-2xl">Oops!... Error</h1>
        <img className="rounded h-96 w-96 mx-auto" src={Errs} alt="error" />
        <div className="text-center">
          <Link to="/" className="bg-blue-600 px-4 py-2 text-lg text-slate-100 rounded-lg">Back to Home</Link>
        </div>
      </div>
    </section>
  )
}
