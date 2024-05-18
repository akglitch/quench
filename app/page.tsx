import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import { Nav } from "./components/Nav";
import HotDeals from "./components/HotDeals";
import NewArrivals from "./components/NewArrivals";





export default function Home() {
  return (

    
    <main className="">
      <div className="">
     <Nav />
       <Hero />
       <NewArrivals />
     <HotDeals />
       <ProductList />

<Footer />

      </div>
      
    </main>
  );
}
