import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="bg-primary/10 absolute inset-0 -z-10 rounded-full blur-3xl" />

      {/* Main Card */}
      <div className="bg-background relative overflow-hidden rounded-3xl border p-4 shadow-xl">
        <Image
          src="https://static.vecteezy.com/system/resources/thumbnails/054/039/938/small/two-workers-in-blue-uniforms-converse-in-front-of-a-house-surrounded-by-containers-emphasizing-home-service-and-maintenance-png.png"
          alt="Home Service Illustration"
          width={700}
          height={700}
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Floating Card */}
      <div className="bg-background absolute -bottom-6 -left-6 rounded-2xl border p-4 shadow-lg">
        <p className="text-muted-foreground text-sm">
          Verified Technicians
        </p>

        <p className="text-primary mt-1 text-2xl font-bold">
          500+
        </p>
      </div>

      {/* Floating Card */}
      <div className="bg-background absolute -top-6 -right-6 rounded-2xl border p-4 shadow-lg">
        <p className="text-muted-foreground text-sm">
          Successful Bookings
        </p>

        <p className="text-primary mt-1 text-2xl font-bold">
          10K+
        </p>
      </div>
    </div>
  );
}