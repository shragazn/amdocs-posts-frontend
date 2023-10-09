import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { User } from "@/components/influencers/user";
import { InfluencerDialog } from "@/components/influencers/dialog";

const Influencers = () => {
  return (
    <>
      <section>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">Influencers</h2>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3 p-2">
              <Checkbox />
              <p className="text-gray-500">3 influencers selected</p>
              <Button variant="destructive">Remove all</Button>
            </div>
            <Separator />
            <table className="w-fit">
              <tbody>
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
    </>
  );
};

export default Influencers;
