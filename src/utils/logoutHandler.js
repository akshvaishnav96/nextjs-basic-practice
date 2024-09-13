
import { revalidatePath } from "next/cache";


async function logoutHandler(router) {

    try {

    

      let res = await fetch("/api/logout", { method: "POST" });
      let data = await res.json();
   

      return router.push("/login?msg=successfully logout&flag=success")
      
    } catch (error) {
      return error.message;
     
    }
   }

export {logoutHandler}