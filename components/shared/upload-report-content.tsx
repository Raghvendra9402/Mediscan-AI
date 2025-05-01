"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import toast from "react-hot-toast";
import { compressImage } from "@/lib/compressImage";
import { useReportStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export function UploadReportContent() {
  const [base64Data, setBase64Data] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { reportData, setReportData, clearReportData } = useReportStore();
  const router = useRouter();
  const handleReportFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      let isValidImage = false;
      let isValidDoc = false;

      const validImages = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
      ];
      const validDocs = ["application/pdf"];

      if (validImages.includes(file.type)) {
        isValidImage = true;
      }
      if (validDocs.includes(file.type)) {
        isValidDoc = true;
      }

      if (!isValidImage && !isValidDoc) {
        toast.error("File type not supported");
        return;
      }

      if (isValidDoc) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const fileContent = reader.result as string;
          console.log(fileContent);
          toast.success("Document uploaded successfully");
          setBase64Data(fileContent);
        };

        reader.readAsDataURL(file);
      }

      if (isValidImage) {
        compressImage(file, (compressedFile: File) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const fileContent = reader.result as string;
            console.log(fileContent);
            toast.success("Image uploaded successfully");
            setBase64Data(fileContent);
          };

          reader.readAsDataURL(compressedFile);
        });
      }
    }
  };

  const handleUpload = async () => {
    const toastId = toast.loading("Generating summary...");
    try {
      setIsLoading(true);
      if (!base64Data) {
        toast.error("Upload a valid report", { id: toastId });
        return;
      }
      const response = await axios.post("/api/extractreport", {
        base64: base64Data,
      });

      if (response.data) {
        const reportText = response.data.text;
        console.log("Report text: ", reportText);
        clearReportData();
        setReportData(reportText);
        toast.success("summary generated successfully", { id: toastId });
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
      console.log(error);
    }
  };

  const handleProceed = () => {
    if (!reportData) {
      toast.error("No report summary to proceed");
      return;
    }
    router.push("/chat");
  };
  return (
    <div className="grid w-full items-start gap-6 overflow-y-auto p-4 pt-0">
      <fieldset className="relative grid gap-6 rounded-lg border p-4">
        <legend className="text-sm font-medium">Report</legend>
        {isLoading && (
          <div className="absolute z-10 h-full w-full bg-card/90 rounded-lg flex flex-row items-center justify-center">
            <Loader className="size-5 animate-spin" />
          </div>
        )}
        <Input type="file" onChange={handleReportFile} />
        <Button onClick={handleUpload} variant={"outline"}>
          Upload Report or File
        </Button>
        <Label>Report summary</Label>
        <Textarea
          placeholder="your uploaded report or file summary will be generated here automatically"
          className="resize-none focus-visible:ring-0 max-h-60 overflow-y-auto"
          value={reportData}
          onChange={(e) => setReportData(e.target.value)}
        />
        <Button
          className="bg-teal-600 hover:bg-teal-700"
          onClick={handleProceed}
          disabled={!reportData}
        >
          Proceed with the report
        </Button>
      </fieldset>
    </div>
  );
}
