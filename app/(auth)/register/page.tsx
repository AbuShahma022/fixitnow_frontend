import GuestRoute from "../login/_components/GuestRoute";
import RegisterForm from "../login/_components/RegisterForm";


export default function RegisterPage() {
  return  (
    <GuestRoute>
      <RegisterForm />
    </GuestRoute>
  );
}