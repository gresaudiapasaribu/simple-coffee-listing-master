import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";

const App = () => {
  const [CoffeeDatas, setCoffeeDatas] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // get data
  const getData = async () => {
    try {
      setLoading(true);
      const ress = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
      );
      if (!ress.ok) throw new Error("Failed to fetch data");
      const data = await ress.json();
      setCoffeeDatas(data);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Oops! Failed to load coffee data, Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-Black font-display">
      <div className=" w-full h-[40vh] bg-center bg-cover bg-no-repeat bg-[url('/Images/bg-cafe-sm.jpg')] sm:bg-[url('/Images/bg-cafe.jpg')] lg:bg-[url('/Images/bg-cafe-lg.jpg')]"></div>
      <div className="-mt-28 px-8 md:px-16 ">
        <div className="bg-Black-100 overflow-hidden flex flex-col items-center justify-center w-full mx-auto max-w-[1200px] p-5 rounded-md">
          <Header
            CoffeeDatas={CoffeeDatas}
            filter={filter}
            setFilter={setFilter}
          />
          {loading ? (
            <p className="text-White my-6 text-center">
              Loading coffee menu...
            </p>
          ) : (
            <>
              {error && (
                <p className="text-Red text-sm font-medium my-4 text-center">
                  {error}
                </p>
              )}
            </>
          )}
          <ProductList CoffeeDatas={CoffeeDatas} filter={filter} />
        </div>
      </div>
      <p className="text-center text-sm text-White mt-7">
        Challenge by{" "}
        <a
          className="text-Btn-Yellow underline"
          href="https://devchallenges.io/"
        >
          devchallenges
        </a>{" "}
        coded by GresAudia
      </p>
    </div>
  );
};
export default App;
