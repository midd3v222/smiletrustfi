import ClinicCardSkeleton from "./ClinicCardSkeleton";

export default function ClinicListSkeleton() {
  return (
    <div className="space-y-3 mt-6">
      <ClinicCardSkeleton />
      <ClinicCardSkeleton />
      <ClinicCardSkeleton />
      <ClinicCardSkeleton />
    </div>
  );
}
