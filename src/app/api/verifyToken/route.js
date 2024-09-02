import User from "../../../models/user"

export async function GET(request){

 
    try {

        const url = new URL(request.url);
        const queryParams = url.searchParams;
        const token = queryParams.get('token');

        const user = await User.findOne({verifyToken:token}).select("-password -verifyToken");
        if(user.isVarified === true){
            return new Response(null, {
                status: 302, // HTTP status code for redirection
                headers: {
                  'Location': '/' // URL to redirect to
                }
              });
        }
       if(user.verifyTokenExpire > Date.now()){
        user.isVarified = true;
        await user.save()
        return new Response(null, {
            status: 302, // HTTP status code for redirection
            headers: {
              'Location': '/' // URL to redirect to
            }
          });
       } else{
        throw new Error ("verification token Not Valid please register again");
       }

      
       

       
    } catch (error) {
     
        console.log(error.message);
        
        return new Response({msg:error.message}, {
            status: 302, // HTTP status code for redirection
            headers: {
              'Location': '/login' // URL to redirect to
            }
          });
    }
}