import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QrCode } from "lucide-react";
import contact from "@/assets/image/contact.jpg";
import Image from "next/image";
import { fetchData } from "@/utils/query/query";
import { queryKeys } from "@/utils/constants/constants";

const QrScan =  ({qrImage}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="icon">
          <QrCode size={24} className="text-foreground" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Scan QR</DialogTitle>
          <DialogDescription>
            Scan the QR code to connect for payment
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <img src={qrImage} alt="QR Code" className="w-52 h-52" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QrScan;
