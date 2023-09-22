import { SignedIn, SignOutButton, OrganizationSwitcher } from "@clerk/nextjs"
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function RightSidebar() {
    return (
        <section className='custom-scrollbar rightsidebar'>
            <div className='flex flex-1 flex-col justify-start'>
                <h3 className='text-heading4-medium text-light-1'>
                    Suggested Communities
                </h3>
            </div>
            <div className='flex flex-1 flex-col justify-start'>
                <h3 className='text-heading4-medium text-light-1'>
                    Suggested Users
                </h3>
            </div>
        </section>
    )
}

export default RightSidebar;