import TechnicianDetails from "./TechnicianDetails";

interface TechnicianDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TechnicianDetailsPage({
  params,
}: TechnicianDetailsPageProps) {
  const { id } = await params;

  return <TechnicianDetails id={id} />;
}