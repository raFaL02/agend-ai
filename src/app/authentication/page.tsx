import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SignUpForm } from "./components/sign-up-form";

const AuthenticationPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="register">
          <SignUpForm />
        </TabsContent>
        <TabsContent value="login"></TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthenticationPage;
