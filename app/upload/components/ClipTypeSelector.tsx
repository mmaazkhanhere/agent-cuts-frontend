import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

type ClipTypeSelectorProps = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

export const ClipTypeSelector = ({
  selectedCategory,
  setSelectedCategory,
}: ClipTypeSelectorProps) => {
  const categories = [
    { value: "funny", label: "Funny" },
    { value: "action", label: "Action" },
    { value: "trending", label: "Trending" },
    { value: "auto", label: "Auto" },
  ];

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Select Clip Type</CardTitle>
        <CardDescription>
          Choose what type of short clips you want to generate
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <Button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              size="lg"
              className={`${
                selectedCategory === category.value
                  ? "bg-teal-500 hover:bg-teal-400"
                  : "bg-gray-700 hover:bg-gray-600"
              } transition-colors`}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
