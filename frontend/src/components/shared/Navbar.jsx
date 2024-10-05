import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

function Navbar() {
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    }
    catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold text-[#008080]">
            Hire<span className="text-[#FF6F61]">Way</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse Jobs</Link></li>
          </ul>
          {
            !user ? (
              <div className="flex items-center gap-2">
                <Link to="/signup"><Button className="bg-gradient-to-r from-red-500 to-pink-500 text-black px-4 py-2 rounded transition duration-300 hover:from-blue-200 hover:to-cyan-600">SignUp</Button></Link>
                <Link to="/login"><Button className="bg-gradient-to-r from-red-500 to-pink-500 text-black px-4 py-2 rounded transition duration-300 hover:from-blue-200 hover:to-cyan-600">Login</Button></Link>
              </div>
            ):(
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage className="w-20" src={user?.profile?.profilePhoto} alt="@shadcn"  />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div>
                    <div className="flex gap-2 space-y-2">
                        <Avatar className="cursor-pointer">
                            <AvatarImage className="w-20" src={user?.profile?.profilePhoto} alt="@shadcn" />
                        </Avatar>
                        <div>
                            <h4 className="font-medium">{user?.fullname}</h4>
                            <p className="text-sm text-muted-foreground">{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <div className="flex flex-col my-2 text-gray-600">
                        <div className="flex w-fit items-center cursor-pointer gap-2">
                            <User2/>
                            <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                        </div>
                        <div className="flex w-fit items-center cursor-pointer gap-2">
                            <LogOut/>
                            <Button onClick = {logoutHandler} variant="link">Logout</Button>
                        </div>
                    </div>
                </div>
            </PopoverContent>
          </Popover>
        )
    }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
