import { Button } from "@/components/ui/button";
import { signIn } from "./actions/sign_in";
import { signOut } from "./actions/sign_out";
import { auth } from "@/auth";


export default async function Home() {

  const session = await auth()

  return (<div className="">
    <h1>Home page</h1>
    <form action={signIn}>
      <Button type="submit">signin</Button>

    </form>
    <form action={signOut}>
      <Button type="submit">signout</Button>
    </form>
    {
      session?.user && <div className="">
        {JSON.stringify(session.user)}
      </div>
    }
  </div>


  );
}
