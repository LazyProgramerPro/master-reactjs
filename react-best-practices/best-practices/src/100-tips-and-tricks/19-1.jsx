const RolesViews = {
  ADMIN: AdminView,
  TEACHER: TeacherView,
  STUDENT: StudentView,
};

const DisplayUser = ({ role }) => {
  const View = RolesViews[role] ?? GuestView;
  return (
    <div>
      <View />
    </div>
  );
};

const AdminView = () => <div>Teacher</div>;
const TeacherView = () => <div>Teacher</div>;
const StudentView = () => <div>Student</div>;
const GuestView = () => <div>GuestView</div>;

export default DisplayUser;
