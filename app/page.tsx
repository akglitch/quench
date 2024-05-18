import Image from "next/image";
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

<Footer />

      </div>
      
    </main>
  );
}
