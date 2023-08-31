import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
    title:string;
    description:string;
<<<<<<< HEAD
    icon: LucideIcon;
=======
    icon:LucideIcon;
>>>>>>> af376d95a9e9f4d073d01c649fe7436b3012c701
    iconColor?:string;
    bgColor?:string;
}

const Heading = ({title,description,icon:Icon,iconColor,bgColor}:HeadingProps) => {
    return(
        <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
            <div className={cn("p-2 w-fit rounded-md",bgColor)}>
                <Icon className={cn("w-10 h-10",iconColor)} />
            </div>
            <div>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default Heading
=======
export default Heading;
>>>>>>> af376d95a9e9f4d073d01c649fe7436b3012c701
