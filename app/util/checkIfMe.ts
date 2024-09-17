import { useUser } from "@clerk/nextjs";

function CheckIfMe() {
    const { user } = useUser()

    return user?.emailAddresses[0].toString() == 'dhanush.actual1@gmail.com';
}
export default CheckIfMe;