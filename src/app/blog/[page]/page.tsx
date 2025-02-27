import BlogList from "@/app/blog/BlogList";
import FilterSearchBar from "@/app/blog/FilterSearchBar";
import Pagination from "@/app/components/ui/Pagination";
import { useBlogByPage } from "@/app/hooks/use-blog-by-page";
import { useCategories } from "@/app/hooks/use-categories";

const Blog = async ({ params }: { params: { page: string } }) => {
	const currentPage = parseInt(params.page, 10) || 1;
	const { blogsPerPage, totalPages } = await useBlogByPage(currentPage);
	const categories = await useCategories();

	return (
		<main className="mx-auto min-h-[85vh] max-w-[1536px] bg-brand-dark-2 grid lg:grid-cols-[1fr_4fr] w-full pt-16 md:pt-24 px-6 sm:px-10 lg:px-20 gap-10">
			<FilterSearchBar data={categories} />
			<section className="flex h-full flex-col justify-between w-full mx-auto gap-6">
				<BlogList data={blogsPerPage} />
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					activeCategory=""
				/>
			</section>
		</main>
	);
};

export default Blog;
