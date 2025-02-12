import BookList from "@/components/book-list";
import BookOverview from "@/components/book-overview";
import { sampleBooks } from "../constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
const Home = async () => {
  const result = await db.select().from(users)
  console.log(JSON.stringify(result))
  return (
    <div>
      <BookOverview  {...sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-20"
      />
    </div>
  )
}

export default Home; 