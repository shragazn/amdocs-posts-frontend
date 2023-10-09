import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { User } from "@/components/influencers/user";
import { InfluencerDialog } from "@/components/influencers/dialog";

const Influencers = () => {
  return (
    <section className="flex items-center justify-center">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">Influencers</h2>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-4">
          <Separator />
          <table>
            <tbody>
              <tr>
                <td className="p-2">
                  <Checkbox />
                </td>
                <td className="p-2" colSpan={2}>
                  <p className="text-gray-500">3 influencers selected</p>
                </td>
                <td className="p-2 pl-8">
                  <Button variant="destructive">Remove</Button>
                </td>
              </tr>
              <User client="amdocs" username="John Doe" />
              <User client="amdocs" username="Jane Doe" />
              <User client="amdocs" username="Ivan Ivanov" />
              <User client="amdocs" username="Petr Petrov" />
            </tbody>
          </table>
          <InfluencerDialog></InfluencerDialog>
        </CardContent>
      </Card>
    </section>
  );
};

export default Influencers;
