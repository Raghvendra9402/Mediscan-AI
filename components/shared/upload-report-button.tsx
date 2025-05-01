import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { UploadReportContent } from "./upload-report-content";

export function UploadReportButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className={cn("bg-teal-600 hover:bg-teal-700", className)}
        >
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">Upload</DialogTitle>
        </DialogHeader>
        <UploadReportContent />
      </DialogContent>
    </Dialog>
  );
}
