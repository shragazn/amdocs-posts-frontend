import { User } from "@/types/api";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

type Props = User;

export function User({ username, client }: Props) {
  const initials = username
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <tr className="table-row">
      <td className="p-2">
        <Checkbox />
      </td>
      <td className="w-fit p-2">
        <Avatar>
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </td>
      <td className="flex flex-col p-2">
        <h3 className="font-bold">{username}</h3>
        <small className="text-gray-500">{client}</small>
      </td>
      <td className="p-2 pl-8">
        <Button className="w-fit">Remove</Button>
      </td>
    </tr>
  );
}
