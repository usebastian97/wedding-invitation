import { Invitation } from "@/components/Invitation";

export const metadata = {
  title: "Sebastian & Marina - Wedding Invitation",
  description: "Vă invităm cu deosebită plăcere să luați parte la celebrarea căsătoriei noastre.",
  openGraph: {
    title: "Sebastian & Marina - Wedding Invitation",
    description: "Vă invităm cu deosebită plăcere să luați parte la celebrarea căsătoriei noastre.",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/023d3f87-d315-4bce-bebc-104525a66326/Gemini_Generated_Image_5kubfe5kubfe5kub-resized-1770299721566.webp",
        width: 8000,
        height: 8000,
      },
    ],
  },
};

export default function Home() {
  return <Invitation />;
}
