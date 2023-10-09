import { DatePickerWithRange } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Reports = () => {
  return (
    <section className="flex justify-center">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">Reports</h2>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-4">
          <Separator />
          <div className="flex gap-4">
            <DatePickerWithRange />
            <Button variant="default">Generate report</Button>
          </div>
          <p className="text-gray-500">No reports available</p>
          <ul className="flex w-full flex-col gap-4">
            <li className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium text-gray-200">
                  2023/10/01 - 2023/10/30
                </p>
                <small className="text-xs font-semibold text-gray-500">
                  Created: 2023/10/01
                </small>
              </div>
              <Button variant="secondary">Download</Button>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium text-gray-200">
                  2023/10/01 - 2023/10/30
                </p>
                <small className="text-xs font-semibold text-gray-500">
                  Created: 2023/10/01
                </small>
              </div>
              <Button variant="secondary">Download</Button>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default Reports;
