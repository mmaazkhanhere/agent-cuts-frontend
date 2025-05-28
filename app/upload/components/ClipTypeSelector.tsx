import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/app/components/ui/select";

interface ClipTypeSelectorProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

interface Category {
  value: string;
  label: string;
}
export const ClipTypeSelector = ({
  selectedCategory,
  setSelectedCategory,
}: ClipTypeSelectorProps) => {
  const categories: Category[] = [
    { value: "highlights", label: "Best Moments & Highlights" },
    { value: "educational", label: "Educational Snippets" },
    { value: "funny", label: "Funny Moments" },
    { value: "motivational", label: "Motivational Quotes" },
    { value: "tutorial", label: "Quick Tutorials" },
    { value: "trending", label: "Trending Topics" },
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
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="!bg-gray-700 !border-gray-600 cursor-pointer w-full">
            <SelectValue placeholder="Choose clip category" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600">
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};
