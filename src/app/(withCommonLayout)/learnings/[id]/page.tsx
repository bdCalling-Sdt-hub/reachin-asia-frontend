import BlogDetails from '@/components/pages/learnings/BlogDetails';

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
      return (
            <div>
                  <BlogDetails id={params.id} />
            </div>
      );
};

export default BlogDetailsPage;
