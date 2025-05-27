import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Video, RotateCcw } from "lucide-react";

export const SelectedVideoCard = ({ selectedFile, resetUpload }) => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Video className="mr-2 h-5 w-5 text-teal-400" />
          Selected Video
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">{selectedFile.name}</p>
            <p className="text-sm text-gray-400">
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>
          <Button
            variant="outline"
            className="hover:bg-teal-500"
            onClick={resetUpload}
          >
            <RotateCcw className="mr-1 h-4 w-4" />
            Change File
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
