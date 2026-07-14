import type { ContactInfoItem } from "@/types/common.types";
import { Mail, Phone, MapPin } from "lucide-react";

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "nikhilsaini0210@gmail.com",
    href: "mailto:nikhilsaini0210@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9837669528",
    href: "tel:+919837669528",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bulandshahr, UP, India",
  },
];
