import { AllCategoriesLinks } from "@/constants";

const SubItems = () => {
  return (
    <div>
        {
            AllCategoriesLinks.map((categ) => (
                <div key={categ.title}>
                    {categ.title}
                </div>
            ))
        }
    </div>
  )
};

export default SubItems;
