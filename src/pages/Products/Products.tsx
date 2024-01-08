import PageLayout from "@/components/Common/Page/PageLayout";
import CreateNewProduct from "@/components/Products/CreateNewProduct/CreateNewProduct";
import ProductsTable from "@/components/Products/Table/ProductsTable";

const Products = () => {
  return (
    <PageLayout
      title="لیست محصولات"
      description="در این بخش تمامی محصولات سایت را مشاهده می کنید."
    >
      <CreateNewProduct />
      <ProductsTable />
    </PageLayout>
  );
};

export default Products;
