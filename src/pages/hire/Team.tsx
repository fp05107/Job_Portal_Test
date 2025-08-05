import HirePageLayout from "@/components/HirePageLayout";

const Team = () => {
  return (
    <HirePageLayout
      title="Hire a Full Team"
      subtitle="Need a full product team? Get developers, designers, and PMs working together from day one."
    >
      <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li>Pre-built, collaborative product teams</li>
        <li>End-to-end project delivery</li>
        <li>Flexible scaling and timeline</li>
      </ul>
    </HirePageLayout>
  );
};

export default Team;
