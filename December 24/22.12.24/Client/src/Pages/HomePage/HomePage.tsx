import DialogAddEdit from "@/Components/DialogAddEdit/DialogAddEdit";
import PostGrid from "@/Components/PostsGrid/PostsGrid.tsx";

const HomePage = () => {
  return (
    <div>
      <div className="m-6">
        <DialogAddEdit />
      </div>
      <PostGrid />
    </div>
  );
};

export default HomePage;
