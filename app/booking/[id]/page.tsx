import BookingDetails from "@/components/booking/BookingDetails";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {
  const { id } = await params;

  return <BookingDetails id={id} />;
}