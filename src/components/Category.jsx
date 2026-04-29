import { getCategory } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async () => {
  const categories = await getCategory()
  return (
    <div className="mb-5 space-x-3">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`?category=${category.name.toLowerCase()}`}
        >
          {" "}
          <Button variant="outline" size="sm">
            {category.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;