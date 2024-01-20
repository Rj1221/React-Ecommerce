import { useState } from "react";
import ProductCard from "../components/ProductCard";
const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [category, setCategory] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const addToCartHandler = () => {};
  return (
    <>
      <div className="product-search-page">
        <aside>
          <h2>Filters</h2>
          <div>
            <h4>Sort</h4>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              name="sort"
              id="sort"
            >
              <option value="">Select</option>
              <option value="asc">Price (Low to High)</option>
              <option value="dsc">Price (High to Low)</option>
            </select>
          </div>
          <div>
            <h4>Max Price :{maxPrice || ""}</h4>
            <input
              type="range"
              min={100}
              max={100000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
          <div>
            <h4>Category</h4>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              id="category"
            >
              <option value="">Select</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="grocery">Grocery</option>
              <option value="utensils">Utensils</option>
              <option value="stationary">Stationary</option>
              <option value="others">Others</option>
            </select>
          </div>
        </aside>
        <main>
          <h1>Products</h1>
          <input
            type="text"
            placeholder="Search by name ...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search-product-list">
            <ProductCard
              productId="1"
              name="Product 1"
              photo="https://png.pngtree.com/png-vector/20200403/ourlarge/pngtree-online-store-with-buy-button-on-laptop-png-image_2173971.jpg"
              price={100}
              stock={10}
              handler={addToCartHandler}
            />
          </div>
          <article>
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            <span>
              Page {page} of {4}
            </span>
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              disabled={page === 4}
            >
              Next
            </button>
          </article>
        </main>
      </div>
      ;
    </>
  );
};

export default Search;
