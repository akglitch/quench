import Image from "next/image";
import ProductDisplay from "./components/productDisplay";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import { Nav } from "./components/Nav";





export default function Home() {
  return (

    
    <main className="">
      <div className="">
     <Nav />
       <Hero />
       <ProductList />
<ProductDisplay />
<Footer />

      </div>
      
    </main>
  );
}
