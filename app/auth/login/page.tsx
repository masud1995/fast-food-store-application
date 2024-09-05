import LoginForm from "@/app/components/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen mx-auto w-[560px]">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter login credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>

    </div>
  );
};

export default LoginPage;
