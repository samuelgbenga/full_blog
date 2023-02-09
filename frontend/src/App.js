import TopBar from "./components/topBar";
import Hero from "./components/hero";
import BlogCats from "./components/blogCats";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-white/60 w-full">
      <TopBar />
      <Hero />
      <BlogCats />
      <Footer />
    </div>
  );
}

export default App;
