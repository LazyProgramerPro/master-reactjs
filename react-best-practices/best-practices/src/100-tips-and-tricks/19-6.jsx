// const createFilter = (filter) => {
//   switch (filter) {
//     case "date":
//       return <DateFilter />;
//     case "category":
//       return <CategoryFilter />;
//     default:
//       return <NoFilter />;
//   }
// };

const filterFactory = {
  date: DateFilter,
  category: CategoryFilter,
};

const DisplayFilter = ({ filter }) => {
  //return createFilter(filter);
  return filterFactory[filter] ?? <NoFilter />;
};

const DateFilter = () => <div>Pick a date</div>;
const CategoryFilter = () => <div>Select a category</div>;
const NoFilter = () => null;
