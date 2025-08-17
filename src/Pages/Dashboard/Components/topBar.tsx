import { use } from "react";
import { useUserStore } from "../../../store/UserStore";

export default function TopBar() {
    const user = useUserStore((store) => store.user)
    const setUser = useUserStore((store) => store.setUser)
    return (
    <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, backgroundColor: '#f5ededff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{height: 46, width: 46}}>
               logo
            </div>
            <div>
                <p>{user?.firstName} {user?.lastName}</p>
                <button onClick={()=>{
                    setUser(undefined)
                    localStorage.clear
                }} style={{cursor: "pointer"}}>Logout</button>
            </div>
        
    </div>
    );
}