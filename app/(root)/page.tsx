import BookList from "@/components/book-list";
import BookOverview from "@/components/book-overview";
import { sampleBooks } from "../constants";
const Home = () => {
  return (
    <div>
      <BookOverview  {...sampleBooks[0]}/>
      <BookList  
        title="Latest Books"
        books = {sampleBooks}
        containerClassName="mt-20"
      />
    </div>
  )
}

export default Home; 